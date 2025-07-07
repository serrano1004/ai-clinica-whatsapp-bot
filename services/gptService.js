const { OpenAI } = require('openai');
const { obtenerTratamientos, obtenerOfertas } = require('./dataService');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generarRespuesta(preguntaUsuario) {
  const tratamientos = obtenerTratamientos();
  const ofertas = obtenerOfertas();

  const prompt = `
Eres un asistente para una clínica estética. Responde como una persona de recepción.
Usa la siguiente información para responder:

📋 Tratamientos:
${tratamientos.map(t => `- ${t.nombre}: ${t.descripcion}`).join('\n')}

💥 Ofertas actuales:
${ofertas.map(o => `- ${o.titulo}: ${o.detalle}`).join('\n')}

Cliente: ${preguntaUsuario}
Recepcionista:
`;

  const respuesta = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Responde como una recepcionista amable y profesional de una clínica estética." },
      { role: "user", content: prompt }
    ]
  });

  return respuesta.choices[0].message.content.trim();
}

module.exports = { generarRespuesta };
