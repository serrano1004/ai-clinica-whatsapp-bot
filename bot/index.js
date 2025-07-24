require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { generarRespuesta } = require('../services/gptService');
const { actualizarOfertasDesdeTexto } = require('../services/dataService');


const ENABLE_CHANNEL_SYNC = process.env.ENABLE_CHANNEL_SYNC === 'true';
const CHANNEL_PHONE = process.env.CHANNEL_PHONE;

// Memoria de conversación por usuario
const historialPorUsuario = {};

// Frases que indican intención de reserva (más estricto)
const frasesReserva = [
  'quiero reservar',
  'quiero una cita',
  'reservar',
  'cita',
  'agendar',
  'quiero agendar',
  'quiero pedir cita', 
  'resérvame con', 
  'reservame con'
];

console.log('🟡 Iniciando el bot...');

const client = new Client({
  authStrategy: new LocalAuth({ clientId: process.env.SESSION_ID || "default" }),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox']
  }
});

console.log('🔵 Cliente de WhatsApp creado. Esperando conexión...');
client.initialize();


client.on('qr', qr => {
  console.log('🟢 Escanea este código QR para conectar WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => console.log('🔐 Autenticado correctamente.'));
client.on('auth_failure', msg => console.error('❌ Error de autenticación:', msg));
client.on('ready', () => console.log('🤖 Bot conectado a WhatsApp!'));


client.on('message', async msg => {
  if (msg.fromMe || msg.isStatus || msg.type !== 'chat') return;

  const ahora = Date.now();
  const cincoMin = 5 * 60 * 1000;
  if (msg.timestamp * 1000 < ahora - cincoMin) {
    console.log(`⏳ Mensaje antiguo ignorado de ${msg.from}`);
    return;
  }

  const numeroRemitente = msg.from.replace(/@c\.us$/, '');

  // Si viene del canal configurado y está habilitada la opción de sincronización
  if (ENABLE_CHANNEL_SYNC && numeroRemitente === CHANNEL_PHONE) {
    console.log(`📡 Mensaje del canal de ofertas: ${msg.body}`);
    try {
      actualizarOfertasDesdeTexto(msg.body);
      await msg.reply('✅ Ofertas actualizadas correctamente.');
    } catch (e) {
      console.error('❌ Error al actualizar ofertas desde canal:', e);
      await msg.reply('⚠️ No se pudieron actualizar las ofertas.');
    }
    return;
  }

  // Guardar historial de conversación por usuario
  if (!historialPorUsuario[numeroRemitente]) {
    historialPorUsuario[numeroRemitente] = [];
  }
  historialPorUsuario[numeroRemitente].push({
    role: 'user',
    content: msg.body
  });

  // Detectar intención de reserva
  const textoMinuscula = msg.body.toLowerCase();
  const esReserva = frasesReserva.some(f => textoMinuscula.includes(f));

  console.log(`📨 Mensaje de ${msg.from}: ${msg.body}`);
  try {
    if (esReserva) {
      // Limpiar historial y marcar para no seguir la conversación
      delete historialPorUsuario[numeroRemitente];
      
      // Mensaje amable al cliente
      await msg.reply('¡Perfecto! En un momento te atendemos para concretar los detalles 😊');
      
      // Notificación silenciosa a recepción
      const mensajeRecepcion = `🔔 *Nueva solicitud de cita*\n\n`
        + `📱 Cliente: ${numeroRemitente}\n`
        + `💬 Último mensaje: "${msg.body}"\n\n`
        + `Por favor, continúa la conversación con el cliente.`;
      
      // Si tienes un grupo de recepción, usa su ID aquí
      const chatRecepcion = process.env.RECEPTION_GROUP_ID || msg.from;
      await client.sendMessage(chatRecepcion, mensajeRecepcion);
      return;
    }
    // Enviar historial al generador de respuesta
    const respuesta = await generarRespuesta(msg.body, historialPorUsuario[numeroRemitente]);
    historialPorUsuario[numeroRemitente].push({
      role: 'assistant',
      content: respuesta
    });
    await msg.reply(respuesta);
  } catch (err) {
    console.error('❌ Error al generar respuesta:', err);
    await msg.reply('Lo siento, ha ocurrido un error generando la respuesta.');
  }
});
