const { OpenAI } = require('openai');
const { obtenerTratamientos, obtenerOfertas } = require('./dataService');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


async function generarRespuesta(preguntaUsuario, historial = []) {
  // Primero detectamos si hay intención de reserva
  const palabrasReserva = ['cita', 'reserva', 'agendar', 'reservar'];
  if (palabrasReserva.some(palabra => preguntaUsuario.toLowerCase().includes(palabra))) {
    return '¡Perfecto! Te paso con recepción para concretar tu cita 😊';
  }

  const tratamientos = obtenerTratamientos();
  const ofertas = obtenerOfertas();

  // Mensaje de sistema y contexto de tratamientos/ofertas
  const systemPrompt = `Eres un asistente de clínica estética. Usa un tono joven y cercano (tutea siempre). Sé muy breve y directo.

REGLAS IMPORTANTES:
1. NUNCA preguntes por citas ni horarios.
2. NO des información sobre tratamientos a menos que el cliente pregunte específicamente.
3. NO repitas el nombre de la clínica ni ubicación.

Si el cliente pregunta por tratamientos o precios, usa esta información:
📋 Tratamientos:\n${tratamientos.map(t => `- ${t.nombre}: ${t.descripcion}`).join('\n')}\n\n💥 Ofertas:\n${ofertas.map(o => `- ${o.titulo}: ${o.detalle}`).join('\n')}`;

  // Construir historial para OpenAI
  const messages = [
    { role: "system", content: systemPrompt },
    ...historial,
    { role: "user", content: preguntaUsuario }
  ];

  const respuesta = await openai.chat.completions.create({
    model: "gpt-4",
    messages
  });

  return respuesta.choices[0].message.content.trim();
}

module.exports = { generarRespuesta };
