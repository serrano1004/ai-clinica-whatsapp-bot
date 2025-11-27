# 🤖 AI Clínica WhatsApp Bot

Asistente inteligente para clínicas estéticas vía WhatsApp. Responde como una recepcionista usando información actual de tratamientos y ofertas.

![CI/CD](https://img.shields.io/badge/CI/CD-passing-brightgreen) ![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow) ![License](https://img.shields.io/badge/license-MIT-blue) ![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## 🌟 Descripción General

AI Clínica WhatsApp Bot es una solución innovadora diseñada para clínicas estéticas que buscan mejorar su atención al cliente a través de WhatsApp. Este bot utiliza inteligencia artificial para interactuar con los pacientes, proporcionando información sobre tratamientos, ofertas y respondiendo preguntas frecuentes, todo de manera automatizada y eficiente.

La necesidad de este proyecto surge de la creciente demanda de atención personalizada en el sector de la estética, donde los pacientes buscan respuestas rápidas y precisas. El bot permite a las clínicas optimizar su tiempo y recursos, al mismo tiempo que mejora la experiencia del cliente.

Este proyecto está dirigido a clínicas estéticas que desean implementar un sistema de atención al cliente automatizado, así como a desarrolladores interesados en explorar la integración de inteligencia artificial en aplicaciones de mensajería.

---

## 🔑 Características Clave

- 🤖 **Interacción Automatizada**: Responde a consultas de pacientes como un recepcionista humano.
- 📅 **Actualización de Ofertas**: Proporciona información actualizada sobre promociones y tratamientos.
- 🌐 **Integración con WhatsApp**: Utiliza la API de WhatsApp para una comunicación fluida.
- 🔍 **Acceso a Información**: Responde preguntas frecuentes sobre tratamientos y servicios.
- 🛠️ **Fácil Configuración**: Simple de instalar y personalizar para cada clínica.

---

## 🚀 Requisitos

- **Sistema Operativo**: Compatible con Windows, macOS y Linux.
- **Node.js**: Versión 18 o superior.
- **WhatsApp**: Una cuenta de WhatsApp (NO WhatsApp Business API).
- **API de OpenAI**: Clave de API recomendada para GPT-4.
- **Herramientas Recomendadas**: Editor de código (como Visual Studio Code) y terminal de comandos.

---

## ⚙️ Instalación Rápida

1. Clona el repositorio:
   ```bash
   git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd ai-clinica-whatsapp-bot
   ```
3. Copia el archivo de ejemplo de configuración:
   ```bash
   cp .env.example .env
   ```
4. Edita el archivo `.env` y completa tu clave de API y el ID de sesión único.
5. Instala las dependencias:
   ```bash
   npm install
   ```
6. Inicia el bot:
   ```bash
   npm start
   ```

Para más detalles, consulta el archivo [INSTALL.md](INSTALL.md).

---

## 📜 Guía Rápida de Uso

Una vez que el bot esté en funcionamiento, se abrirá una ventana con un código QR. Escanea el código con tu móvil para iniciar la sesión. La sesión se guardará localmente para evitar tener que escanear cada vez.

### Comandos Principales

- **Iniciar Bot**: `npm start`
- **Verificar Estado**: Revisa la consola para mensajes de conexión.

### Salida Esperada

El bot comenzará a escuchar mensajes y responderá a las consultas de los pacientes en tiempo real.

### Caso de Uso Común

Un paciente envía un mensaje preguntando sobre tratamientos de depilación. El bot responde automáticamente con información sobre los servicios disponibles y precios.

---

## 🏗️ Arquitectura del Proyecto

```
ai-clinica-whatsapp-bot/
├── bot/
│   └── index.js          # Lógica principal del bot
├── data/
│   ├── tratamientos.json  # Información sobre tratamientos
│   └── ofertas.json       # Información sobre ofertas
├── services/
│   ├── dataService.js     # Manejo de datos
│   └── gptService.js      # Integración con OpenAI
├── .env.example            # Ejemplo de configuración
├── .gitignore              # Archivos a ignorar por Git
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación del proyecto
```

### Flujo de Datos Principal

1. El bot escucha mensajes entrantes a través de la API de WhatsApp.
2. Procesa la consulta utilizando el servicio de datos.
3. Genera una respuesta utilizando la API de OpenAI.
4. Envía la respuesta al paciente a través de WhatsApp.

### Componentes Clave

- **bot/index.js**: Controla la lógica del bot y la interacción con WhatsApp.
- **dataService.js**: Administra la carga y acceso a datos de tratamientos y ofertas.
- **gptService.js**: Se encarga de la comunicación con la API de OpenAI.

---

## 🛠️ Detalles Técnicos

El bot utiliza un patrón de diseño basado en servicios para separar la lógica de negocio de la interacción con la API de WhatsApp y OpenAI. Esto permite una fácil escalabilidad y mantenimiento.

### Dependencias Críticas

- **whatsapp-web.js**: Para la integración con WhatsApp.
- **axios**: Para realizar solicitudes HTTP a la API de OpenAI.

### Requisitos de Rendimiento

El bot está diseñado para manejar múltiples conversaciones simultáneamente, con un tiempo de respuesta óptimo de menos de 2 segundos por consulta.

---

## 📚 Ejemplos de Uso

### Ejemplo 1: Consultar Tratamientos

```bash
# El paciente envía un mensaje
"¿Qué tratamientos de depilación ofrecen?"

# Respuesta esperada del bot
"Ofrecemos depilación láser, cera caliente y cera fría. ¿Te gustaría más información sobre alguno?"
```

### Ejemplo 2: Ofertas Actuales

```bash
# El paciente pregunta
"¿Tienen alguna oferta?"

# Respuesta esperada del bot
"Actualmente tenemos un 15% de descuento en limpieza facial durante junio. ¡Aprovecha!"
```

### Ejemplo 3: Información General

```bash
# El paciente pregunta
"¿Cuánto cuesta la depilación láser?"

# Respuesta esperada del bot
"La depilación láser cuesta 100€ por sesión. Ofrecemos paquetes de 5 sesiones por 400€."
```

---

## ⚙️ Configuración

### Variables de Entorno Importantes

- **OPENAI_API_KEY**: Tu clave de OpenAI.
- **SESSION_ID**: Un identificador único de sesión (por ejemplo, clinica_marbella).

### Archivos de Configuración

- **.env**: Contiene las variables de entorno necesarias para la configuración del bot.

### Opciones de Personalización

Puedes personalizar los archivos `data/tratamientos.json` y `data/ofertas.json` para adaptarlos a tu clínica.

---

## 🛠️ Solución de Problemas Comunes

### Problema 1: El bot no responde

**Causa Probable**: Problemas de conexión a la API de WhatsApp.

**Solución**: Verifica tu conexión a Internet y asegúrate de que el código QR esté escaneado correctamente.

### Problema 2: Error de clave de API

**Causa Probable**: La clave de API de OpenAI es incorrecta.

**Solución**: Revisa tu archivo `.env` y asegúrate de que la clave sea válida.

### Problema 3: Mensajes no se envían

**Causa Probable**: El bot no está conectado a WhatsApp.

**Solución**: Reinicia el bot y escanea nuevamente el código QR.

---

## 🤝 Contribuciones

Si deseas reportar un error o sugerir una nueva característica, por favor abre un issue en el repositorio de GitHub. Para más detalles sobre cómo contribuir, consulta el archivo [CONTRIBUTING.md](CONTRIBUTING.md).

### Código de Conducta

Por favor, respeta el código de conducta al interactuar con la comunidad.

---

## 📜 Licencia y Créditos

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

Agradecimientos a todos los colaboradores y a la comunidad de desarrolladores de OpenAI por su apoyo y recursos.

---

## 📬 Contacto y Soporte

Para consultas, puedes contactar a través del correo electrónico: soporte@clinica.com.

Si encuentras algún problema, por favor abre un issue en GitHub. Para más documentación, visita nuestro [Wiki](https://github.com/serrano1004/ai-clinica-whatsapp-bot/wiki).

¡Únete a nuestra comunidad y mantente actualizado sobre las últimas novedades!