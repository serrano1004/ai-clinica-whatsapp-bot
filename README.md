# 🤖 AI Clínica WhatsApp Bot

Asistente inteligente para clínicas estéticas vía WhatsApp. Responde como una recepcionista usando información actual de tratamientos y ofertas.

---

## 🚀 Requisitos

- Node.js ≥ 18
- Una cuenta de WhatsApp (NO WhatsApp Business API)
- Una clave de API de OpenAI (recomendado GPT-4)

---

## 🧱 Estructura del proyecto

ai-clinica-whatsapp-bot/
├── bot/
│   └── index.js
├── data/
│   └── tratamientos.json
│   └── ofertas.json
├── services/
│   └── dataService.js
│   └── gptService.js
├── .env.example
├── .gitignore
├── package.json
├── README.md


## Variables por clínica

Cada clínica debe tener su propia .env con:
- OPENAI_API_KEY — Tu clave de OpenAI
- SESSION_ID — Un identificador único de sesión (por ejemplo, clinica_marbella)

Además, personaliza:
- data/tratamientos.json
- data/ofertas.json

## Ejemplo de uso

Al ejecutar npm start se abrirá una ventana con el QR para escanear con el móvil. La sesión se guardará localmente para que no tengas que escanear cada vez.

##  ¿Qué hace el bot?
- Escucha mensajes nuevos
- Usa la API de OpenAI con contexto sobre tratamientos y ofertas
- Responde como si fuera personal de recepción

## Posibles mejoras
- Conexión automática a Facebook para leer ofertas
- Panel web para editar tratamientos y ofertas
- Envío automático de recordatorios


---

## ⚙️ Instalación

```bash
git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
cd ai-clinica-whatsapp-bot
cp .env.example .env
# Edita .env y rellena tu API key y session ID único
npm install
npm start
```

## Comunidad
Ejemplo de mensaje para el canal de la comunidad:
```txt
Promo Verano: 15% en limpieza facial durante junio.
Depilación Pack: Compra 4 sesiones, recibe 1 gratis.
Mes de la Juventud: Descuento en ácido hialurónico.
```