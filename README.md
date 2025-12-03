# 🤖 AI Clínica WhatsApp Bot

Asistente inteligente para clínicas estéticas vía WhatsApp. Responde como una recepcionista usando información actual de tratamientos y ofertas.

![CI/CD](https://img.shields.io/badge/CI/CD-passing-brightgreen) ![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 🌟 Descripción General

AI Clínica WhatsApp Bot es una solución innovadora diseñada para clínicas estéticas que desean mejorar su atención al cliente a través de WhatsApp. Este bot utiliza inteligencia artificial para interactuar con los pacientes, proporcionando información sobre tratamientos, ofertas y respondiendo a consultas comunes, como lo haría un recepcionista humano.

La existencia de este proyecto responde a la necesidad de optimizar la atención al cliente en clínicas estéticas, donde el tiempo y la precisión son cruciales. Con el aumento de la demanda de servicios estéticos, es fundamental ofrecer un servicio rápido y eficiente que pueda responder a las inquietudes de los pacientes en tiempo real.

El bot está dirigido a clínicas estéticas que buscan modernizar su atención al cliente, mejorar la satisfacción del paciente y reducir la carga de trabajo del personal. Con AI Clínica WhatsApp Bot, las clínicas pueden ofrecer un servicio 24/7, asegurando que los pacientes siempre tengan acceso a la información que necesitan.

---

## 🔑 Características Clave

- 🤖 **Interacción Natural**: Responde a los pacientes como un recepcionista humano.
- 📅 **Información Actualizada**: Proporciona datos sobre tratamientos y ofertas en tiempo real.
- 📲 **Fácil Integración**: Funciona directamente en WhatsApp sin necesidad de API de WhatsApp Business.
- 🔑 **Configuración Personalizada**: Cada clínica puede personalizar su bot con su propia información.
- ⚡ **Rápido y Eficiente**: Respuestas instantáneas a las consultas de los pacientes.

---

## 🚀 Requisitos Previos

- **Sistema Operativo**: Compatible con Windows, macOS y Linux.
- **Node.js**: Versión 18 o superior.
- **WhatsApp**: Una cuenta de WhatsApp (NO WhatsApp Business API).
- **API de OpenAI**: Se recomienda usar GPT-4 para mejores resultados.
- **Herramientas Recomendadas**: Un editor de texto como Visual Studio Code y Git para la gestión de versiones.

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
- **Detener Bot**: Usa `Ctrl + C` en la terminal.

### Salida Esperada

Al iniciar el bot, deberías ver un mensaje en la terminal indicando que el bot está escuchando mensajes. Los pacientes podrán enviar mensajes y recibir respuestas automáticas basadas en la información proporcionada.

---

## 🏗️ Arquitectura del Proyecto

```
ai-clinica-whatsapp-bot/
├── bot/
│   └── index.js
├── data/
│   ├── tratamientos.json
│   └── ofertas.json
├── services/
│   ├── dataService.js
│   └── gptService.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

### Flujo de Datos

1. El bot escucha mensajes entrantes a través de la API de WhatsApp.
2. Los mensajes son procesados por `index.js`, que gestiona la lógica del bot.
3. Se consultan los archivos `tratamientos.json` y `ofertas.json` para obtener información relevante.
4. Se utiliza `gptService.js` para generar respuestas utilizando la API de OpenAI.
5. Las respuestas se envían de vuelta al usuario a través de WhatsApp.

### Componentes Clave

- **bot/index.js**: Punto de entrada del bot, gestiona la interacción con WhatsApp.
- **data/tratamientos.json**: Contiene información sobre los tratamientos ofrecidos.
- **data/ofertas.json**: Almacena las ofertas actuales.
- **services/gptService.js**: Interactúa con la API de OpenAI para generar respuestas.

---

## 🛠️ Detalles Técnicos

El bot utiliza un patrón de diseño basado en servicios para separar la lógica de negocio de la interacción con la API de WhatsApp. Esto permite una fácil escalabilidad y mantenimiento del código.

### Decisiones Arquitectónicas

- **Uso de Node.js**: Elegido por su eficiencia en el manejo de operaciones asíncronas y su amplia comunidad.
- **API de OpenAI**: Seleccionada por su capacidad de generar respuestas coherentes y contextuales.

### Dependencias Críticas

- **Express**: Para manejar las solicitudes HTTP.
- **Axios**: Para realizar llamadas a la API de OpenAI.

### Requisitos de Rendimiento

El bot debe ser capaz de manejar múltiples solicitudes simultáneamente, por lo que se recomienda un entorno de ejecución optimizado y una buena conexión a Internet.

---

## 📚 Ejemplos de Uso

### Ejemplo 1: Respuesta a Consulta de Tratamiento

```bash
# Usuario envía un mensaje
Hola, ¿qué tratamientos ofrecen?

# Respuesta esperada del bot
Ofrecemos tratamientos de limpieza facial, botox y ácido hialurónico. ¿Te gustaría más información sobre alguno?
```

### Ejemplo 2: Consulta de Ofertas

```bash
# Usuario envía un mensaje
¿Tienen alguna oferta?

# Respuesta esperada del bot
¡Sí! Actualmente tenemos un 15% de descuento en limpieza facial durante junio. ¿Te gustaría reservar una cita?
```

### Ejemplo 3: Información de Contacto

```bash
# Usuario envía un mensaje
¿Dónde están ubicados?

# Respuesta esperada del bot
Estamos ubicados en la Calle Principal, 123. Puedes llamarnos al 555-1234 para más información.
```

---

## ⚙️ Configuración

### Variables de Entorno Importantes

- **OPENAI_API_KEY**: Tu clave de API de OpenAI.
- **SESSION_ID**: Un identificador único para la sesión del bot.

### Archivos de Configuración

- **.env**: Contiene las variables de entorno necesarias para el funcionamiento del bot.

### Opciones de Personalización

Puedes personalizar los archivos `data/tratamientos.json` y `data/ofertas.json` para reflejar los servicios y promociones de tu clínica.

---

## 🛠️ Solución de Problemas Comunes

### Problema 1: El bot no responde

**Causa Probable**: La clave de API de OpenAI no está configurada correctamente.

**Solución**: Verifica que la variable `OPENAI_API_KEY` en el archivo `.env` esté correcta.

### Problema 2: Error al iniciar el bot

**Causa Probable**: Dependencias no instaladas.

**Solución**: Asegúrate de haber ejecutado `npm install` en el directorio del proyecto.

### Problema 3: Mensajes no se envían

**Causa Probable**: Problemas de conexión a Internet.

**Solución**: Verifica tu conexión a Internet y reinicia el bot.

---

## 🤝 Contribuciones

Si deseas reportar un error o sugerir una nueva característica, por favor abre un issue en el repositorio de GitHub. Para más detalles sobre cómo contribuir, consulta el archivo [CONTRIBUTING.md](CONTRIBUTING.md).

### Código de Conducta

Por favor, respeta el código de conducta del proyecto al participar en la comunidad.

---

## 📄 Licencia y Créditos

Este proyecto está bajo la licencia MIT. Puedes consultar el archivo [LICENSE](LICENSE) para más detalles.

Agradecimientos a la comunidad de desarrolladores de código abierto y a OpenAI por su tecnología innovadora.

---

## 📫 Contacto y Soporte

Para consultas, puedes contactarnos a través del correo electrónico: soporte@clinica.com.

Si encuentras algún problema, por favor abre un issue en nuestro [repositorio de GitHub](https://github.com/serrano1004/ai-clinica-whatsapp-bot.git).

Para más documentación, visita nuestra [documentación adicional](https://github.com/serrano1004/ai-clinica-whatsapp-bot.git).

¡Únete a nuestra comunidad y mantente al tanto de las últimas actualizaciones!