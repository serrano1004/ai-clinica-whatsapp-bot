require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { generarRespuesta } = require('../services/gptService');

console.log('🟡 Iniciando el bot...');

const client = new Client({
  authStrategy: new LocalAuth({ clientId: process.env.SESSION_ID || "default" }),
  puppeteer: {
    headless: false,
    args: ['--no-sandbox']
  }
});

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

  console.log(`📨 Mensaje de ${msg.from}: ${msg.body}`);
  try {
    const respuesta = await generarRespuesta(msg.body);
    await msg.reply(respuesta);
  } catch (err) {
    console.error('❌ Error al generar respuesta:', err);
    await msg.reply('Lo siento, ha ocurrido un error generando la respuesta.');
  }
});
