import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { diagnostico } from '../../data/site';

const MAX_BODY_BYTES = 12_000;
const EMAIL_PATTERN = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?(?:\.[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?)+$/i;

export const prerender = false;

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });

const clean = (value: FormDataEntryValue | null, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

export const POST: APIRoute = async ({ request }) => {
  const origin = request.headers.get('origin');
  if (!origin || origin !== new URL(request.url).origin) {
    return json({ message: 'Solicitud no válida.' }, 403);
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > MAX_BODY_BYTES) return json({ message: 'La solicitud es demasiado grande.' }, 413);

  let formData: FormData;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json({ message: 'La solicitud es demasiado grande.' }, 413);
    }

    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      const body = JSON.parse(rawBody) as Record<string, unknown>;
      formData = new FormData();
      for (const [key, value] of Object.entries(body)) {
        if (Array.isArray(value)) value.forEach((item) => formData.append(key, String(item)));
        else if (typeof value === 'string' || typeof value === 'number') formData.set(key, String(value));
      }
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      formData = new FormData();
      new URLSearchParams(rawBody).forEach((value, key) => formData.append(key, value));
    } else {
      return json({ message: 'Formato de solicitud no válido.' }, 415);
    }
  } catch {
    return json({ message: 'No se pudo leer la solicitud.' }, 400);
  }

  // Los bots que completan el campo trampa no reciben un error que confirme el filtro.
  if (clean(formData.get('_gotcha'), 200)) return json({ ok: true });

  const nombre = clean(formData.get('nombre'), 120);
  const empresa = clean(formData.get('empresa'), 160);
  const email = clean(formData.get('email'), 254);
  const tipo = clean(formData.get('tipo'), 120);
  const m2 = clean(formData.get('m2'), 20);
  const comentarios = clean(formData.get('comentarios'), 3000);
  const servicios = formData.getAll('servicios').filter((value): value is string =>
    typeof value === 'string' && diagnostico.services.some((service) => service.value === value),
  );

  const errors: Record<string, string> = {};
  if (!nombre) errors.nombre = 'Ingresá tu nombre y apellido.';
  if (!empresa) errors.empresa = 'Ingresá el nombre de la empresa.';
  if (!email || !EMAIL_PATTERN.test(email)) errors.email = 'Ingresá una dirección de email válida.';
  if (!diagnostico.installationTypes.includes(tipo)) errors.tipo = 'Seleccioná un tipo de instalación válido.';
  if (m2 && (!/^\d+(?:\.\d{1,2})?$/.test(m2) || Number(m2) < 0)) errors.m2 = 'Ingresá una superficie válida.';
  if (errors.nombre || errors.empresa || errors.email || errors.tipo || errors.m2) {
    return json({ message: 'Revisá los campos marcados.', errors }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.RESEND_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;
  const senderAddress = sender?.match(/<([^<>]+)>$/)?.[1] ?? sender ?? '';
  if (
    !apiKey ||
    !recipient ||
    !sender ||
    !EMAIL_PATTERN.test(recipient) ||
    !EMAIL_PATTERN.test(senderAddress) ||
    /[\r\n]/.test(sender)
  ) {
    console.error('Missing or invalid Resend contact configuration.');
    return json({ message: 'El servicio de contacto no está disponible en este momento.' }, 500);
  }

  const safe = {
    nombre: escapeHtml(nombre),
    empresa: escapeHtml(empresa),
    email: escapeHtml(email),
    tipo: escapeHtml(tipo),
    m2: escapeHtml(m2 || 'No especificado'),
    servicios: escapeHtml(servicios.join(', ') || 'No especificado'),
    comentarios: escapeHtml(comentarios || 'Sin comentarios').replace(/\r?\n/g, '<br>'),
  };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `Solicitud de diagnóstico — ${empresa.replace(/[\r\n]/g, ' ').slice(0, 100)}`,
      html: `<h2>Nueva solicitud de diagnóstico</h2>
        <p><strong>Nombre:</strong> ${safe.nombre}</p>
        <p><strong>Empresa:</strong> ${safe.empresa}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Tipo de instalación:</strong> ${safe.tipo}</p>
        <p><strong>Metros cuadrados aprox.:</strong> ${safe.m2}</p>
        <p><strong>Servicios de interés:</strong> ${safe.servicios}</p>
        <p><strong>Comentarios:</strong><br>${safe.comentarios}</p>`,
      text: [
        'Nueva solicitud de diagnóstico',
        `Nombre: ${nombre}`,
        `Empresa: ${empresa}`,
        `Email: ${email}`,
        `Tipo de instalación: ${tipo}`,
        `Metros cuadrados aprox.: ${m2 || 'No especificado'}`,
        `Servicios de interés: ${servicios.join(', ') || 'No especificado'}`,
        `Comentarios: ${comentarios || 'Sin comentarios'}`,
      ].join('\n'),
    });

    if (error) {
      console.error('Resend rejected the contact email:', error.name);
      return json({ message: 'No pudimos enviar tu solicitud. Intentá nuevamente.' }, 502);
    }
    return json({ ok: true });
  } catch (error) {
    console.error('Resend contact request failed:', error instanceof Error ? error.name : 'UnknownError');
    return json({ message: 'No pudimos enviar tu solicitud. Intentá nuevamente.' }, 502);
  }
};
