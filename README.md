# 🤖 AI Clínica WhatsApp Bot

Asistente inteligente para clínicas estéticas vía WhatsApp. Responde como una recepcionista usando información actual de tratamientos y ofertas.

![CI/CD](https://img.shields.io/badge/CI/CD-passing-brightgreen) ![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 🌟 Descripción General

AI Clínica WhatsApp Bot es una solución innovadora diseñada para clínicas estéticas que buscan mejorar su atención al cliente a través de WhatsApp. Este bot utiliza la inteligencia artificial para interactuar con los pacientes, proporcionando información sobre tratamientos, ofertas y respondiendo a consultas frecuentes, todo de manera automatizada y eficiente.

La existencia de este proyecto responde a la necesidad de las clínicas de ofrecer un servicio de atención al cliente 24/7, optimizando el tiempo del personal y mejorando la experiencia del paciente. Al implementar este bot, las clínicas pueden reducir la carga de trabajo de sus recepcionistas y ofrecer respuestas rápidas y precisas a las preguntas de los pacientes.

El público objetivo incluye clínicas estéticas, dermatológicas y de belleza que buscan modernizar su atención al cliente y aprovechar la tecnología para mejorar la comunicación con sus pacientes.

---

## 🔑 Características Clave

- 🤖 **Interacción Automatizada**: Responde automáticamente a las consultas de los pacientes.
- 📅 **Información Actualizada**: Proporciona datos en tiempo real sobre tratamientos y ofertas.
- 📱 **Integración con WhatsApp**: Utiliza la plataforma de WhatsApp para facilitar la comunicación.
- 🔒 **Seguridad de Datos**: Maneja información sensible de manera segura.
- 🌍 **Personalización por Clínica**: Cada clínica puede personalizar su bot según sus necesidades.

---

## 🚀 Requisitos Previos

- **Sistema Operativo**: Compatible con Windows, macOS y Linux.
- **Versiones Mínimas de Software**:
  - Node.js ≥ 18
- **Dependencias Críticas**:
  - WhatsApp Web API
  - OpenAI API (recomendado GPT-4)
- **Herramientas Recomendadas**:
  - Editor de código (Visual Studio Code, Atom, etc.)
  - Terminal de comandos

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

Una vez que el bot esté en funcionamiento, se abrirá una ventana con un código QR. Escanea el código con tu móvil para iniciar la sesión. La sesión se guardará localmente para que no tengas que escanear cada vez.

### Comandos Principales

- **Iniciar Bot**: `npm start`
- **Detener Bot**: `Ctrl + C` en la terminal.

### Salida Esperada

El bot comenzará a escuchar mensajes y responderá a las consultas de los pacientes basándose en la información proporcionada en los archivos de datos.

### Caso de Uso Común

Un paciente envía un mensaje preguntando por tratamientos de depilación. El bot responde automáticamente con la información relevante y las ofertas disponibles.

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
├── .env.example            # Ejemplo de archivo de configuración
├── .gitignore              # Archivos a ignorar por Git
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación del proyecto
```

### Flujo de Datos Principal

1. El bot escucha mensajes entrantes a través de WhatsApp.
2. Procesa la consulta utilizando `gptService.js` para obtener respuestas.
3. Responde al paciente con la información adecuada.

### Componentes Clave

- **bot/index.js**: Controla la lógica del bot y la interacción con WhatsApp.
- **services/dataService.js**: Maneja la carga y el acceso a los datos de tratamientos y ofertas.
- **services/gptService.js**: Se comunica con la API de OpenAI para generar respuestas.

---

## 📊 Detalles Técnicos

El bot utiliza un patrón de diseño basado en servicios, donde cada componente tiene una responsabilidad clara. La elección de Node.js y la API de WhatsApp Web se debe a su facilidad de uso y la capacidad de manejar múltiples conexiones simultáneamente.

### Dependencias Críticas

- **whatsapp-web.js**: Para la integración con WhatsApp.
- **axios**: Para realizar solicitudes HTTP a la API de OpenAI.

### Requisitos de Rendimiento

El bot está diseñado para manejar múltiples conversaciones simultáneamente, por lo que se recomienda un entorno con al menos 2 GB de RAM y una conexión a Internet estable.

---

## 💻 Ejemplos de Uso

### Ejemplo 1: Consultar Tratamientos

```bash
# Iniciar el bot
npm start
```

**Salida Esperada**:
```
Hola, ¿en qué puedo ayudarte hoy?
```

### Ejemplo 2: Consultar Ofertas

```bash
# Enviar mensaje al bot
"¿Tienen ofertas para este mes?"
```

**Salida Esperada**:
```
¡Sí! Este mes tenemos un 15% de descuento en limpieza facial.
```

### Ejemplo 3: Información de Contacto

```bash
# Enviar mensaje al bot
"¿Cuál es su número de contacto?"
```

**Salida Esperada**:
```
Puedes contactarnos al 123-456-7890.
```

---

## ⚙️ Configuración

### Variables de Entorno Importantes

- **OPENAI_API_KEY**: Tu clave de API de OpenAI.
- **SESSION_ID**: Un identificador único para la sesión del bot.

### Archivos de Configuración

- **.env**: Archivo donde se configuran las variables de entorno.
- **data/tratamientos.json**: Archivo para personalizar los tratamientos ofrecidos.
- **data/ofertas.json**: Archivo para personalizar las ofertas disponibles.

### Opciones de Personalización

Puedes personalizar los mensajes y la información de los tratamientos y ofertas editando los archivos JSON en la carpeta `data`.

---

## 🛠️ Solución de Problemas Comunes

### Problema 1: El bot no responde

**Causa Probable**: La sesión de WhatsApp no está activa.

**Solución**:
1. Asegúrate de escanear el código QR.
2. Verifica que el bot esté en ejecución.

### Problema 2: Error de conexión a la API de OpenAI

**Causa Probable**: Clave de API incorrecta.

**Solución**:
1. Revisa tu archivo `.env` y asegúrate de que la clave de API sea correcta.
2. Verifica tu conexión a Internet.

### Problema 3: Mensajes no se envían

**Causa Probable**: Problemas con la conexión de WhatsApp.

**Solución**:
1. Asegúrate de que tu dispositivo móvil esté conectado a Internet.
2. Reinicia el bot y vuelve a escanear el código QR.

---

## 🤝 Contribuciones

Si deseas reportar un error o sugerir una nueva característica, por favor abre un issue en el repositorio de GitHub. Para más detalles sobre cómo contribuir, consulta el archivo [CONTRIBUTING.md](CONTRIBUTING.md).

### Código de Conducta

Por favor, respeta el código de conducta del proyecto al interactuar con la comunidad.

---

## 📜 Licencia y Créditos

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para más detalles.

Agradecimientos especiales a la comunidad de desarrolladores de código abierto y a OpenAI por su tecnología innovadora.

---

## 📫 Contacto y Soporte

Para consultas, puedes contactarnos a través del correo electrónico: soporte@clinica.com.

Si encuentras algún problema, por favor abre un issue en nuestro [repositorio de GitHub](https://github.com/serrano1004/ai-clinica-whatsapp-bot.git).

Para más documentación, consulta el archivo [README.md](README.md) y únete a nuestra comunidad en línea para compartir experiencias y consejos.