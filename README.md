# 🤖 AI Clínica WhatsApp Bot

Asistente inteligente para clínicas estéticas vía WhatsApp. Responde como una recepcionista usando información actual de tratamientos y ofertas.

![CI/CD](https://img.shields.io/badge/CI/CD-passing-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-v18.x-blue) ![License](https://img.shields.io/badge/License-MIT-yellow) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## 🌟 Descripción General

AI Clínica WhatsApp Bot es una solución innovadora diseñada para clínicas estéticas que desean mejorar su atención al cliente a través de WhatsApp. Este bot utiliza inteligencia artificial para interactuar con los pacientes, responder preguntas frecuentes y proporcionar información sobre tratamientos y ofertas disponibles. 

La existencia de este proyecto responde a la necesidad de las clínicas de ofrecer un servicio más eficiente y accesible, permitiendo a los pacientes obtener respuestas rápidas sin la necesidad de esperar en línea o realizar llamadas telefónicas. El bot está diseñado para resolver problemas comunes de comunicación y mejorar la experiencia del cliente.

El público objetivo incluye clínicas estéticas, personal administrativo y pacientes que buscan información sobre servicios de belleza y salud. Con este bot, las clínicas pueden optimizar su tiempo y recursos, ofreciendo un servicio de atención al cliente 24/7.

---

## 🔑 Características Clave

- 🤖 **Interacción Natural**: Responde a los pacientes como un recepcionista humano.
- 📅 **Información Actualizada**: Accede a datos en tiempo real sobre tratamientos y ofertas.
- 💬 **Soporte 24/7**: Disponible para responder preguntas en cualquier momento.
- 🔒 **Seguridad de Datos**: Maneja información sensible de manera segura.
- 📈 **Mejora Continua**: Aprende y se adapta a las interacciones con los usuarios.

---

## 🚀 Requisitos Previos

- **Sistema Operativo**: Compatible con Windows, macOS y Linux.
- **Node.js**: Versión 18 o superior.
- **WhatsApp**: Una cuenta de WhatsApp (NO WhatsApp Business API).
- **API de OpenAI**: Se recomienda usar GPT-4 para mejores resultados.
- **Herramientas Recomendadas**: Editor de texto (como VSCode) y terminal de comandos.

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
4. Edita el archivo `.env` y completa tu clave de API y un ID de sesión único.
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
- **Verificar Estado**: Envía un mensaje al bot y espera su respuesta.

### Salida Esperada

El bot responderá con información sobre tratamientos y ofertas disponibles, como:

```
Hola, soy el asistente de la clínica. ¿En qué puedo ayudarte hoy?
```

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

1. El bot escucha mensajes entrantes de WhatsApp.
2. Utiliza `gptService.js` para procesar la consulta del usuario.
3. Accede a `dataService.js` para obtener información de tratamientos y ofertas.
4. Responde al usuario con la información solicitada.

### Componentes Clave

- **Bot**: Maneja la interacción con WhatsApp.
- **Data Service**: Proporciona acceso a datos de tratamientos y ofertas.
- **GPT Service**: Interactúa con la API de OpenAI para generar respuestas.

---

## 🛠️ Detalles Técnicos

El bot utiliza un patrón de diseño basado en servicios para separar la lógica de negocio de la interacción con la API de WhatsApp y OpenAI. Esto permite una fácil escalabilidad y mantenimiento.

### Dependencias Críticas

- **Node.js**: Para la ejecución del bot.
- **OpenAI API**: Para el procesamiento de lenguaje natural.

### Requisitos de Rendimiento

El bot está diseñado para manejar múltiples interacciones simultáneamente, por lo que se recomienda un entorno con recursos adecuados para garantizar un rendimiento óptimo.

---

## 📚 Ejemplos de Uso

### Ejemplo 1: Consulta de Tratamientos

```bash
# Usuario envía un mensaje
Hola, ¿qué tratamientos ofrecen?

# Respuesta esperada del bot
Ofrecemos tratamientos de limpieza facial, depilación láser y ácido hialurónico.
```

### Ejemplo 2: Información sobre Ofertas

```bash
# Usuario envía un mensaje
¿Tienen alguna oferta?

# Respuesta esperada del bot
¡Sí! Este mes tenemos un 15% de descuento en limpieza facial.
```

### Ejemplo 3: Consulta de Horarios

```bash
# Usuario envía un mensaje
¿Cuáles son sus horarios de atención?

# Respuesta esperada del bot
Estamos abiertos de lunes a viernes de 9:00 a 18:00.
```

---

## ⚙️ Configuración

### Variables de Entorno Importantes

- **OPENAI_API_KEY**: Tu clave de API de OpenAI.
- **SESSION_ID**: Un identificador único para la sesión de la clínica.

### Archivos de Configuración

- **.env**: Archivo donde se almacenan las variables de entorno.
- **data/tratamientos.json**: Archivo que contiene la información de los tratamientos.
- **data/ofertas.json**: Archivo que contiene las ofertas disponibles.

### Opciones de Personalización

Puedes personalizar los tratamientos y ofertas editando los archivos JSON mencionados.

---

## 🛠️ Solución de Problemas Comunes

### Problema 1: El bot no responde

**Causa**: Puede que no esté correctamente conectado a WhatsApp.

**Solución**: Asegúrate de que el código QR esté escaneado y que la sesión esté activa.

### Problema 2: Error de API de OpenAI

**Causa**: Clave de API incorrecta.

**Solución**: Verifica que la clave de API en el archivo `.env` sea correcta.

### Problema 3: Mensajes no se envían

**Causa**: Problemas de conexión a Internet.

**Solución**: Asegúrate de que tu conexión a Internet esté activa y estable.

---

## 🤝 Contribuciones

Si deseas reportar un error o sugerir una nueva característica, por favor abre un issue en el repositorio de GitHub. Para más detalles sobre cómo contribuir, consulta el archivo [CONTRIBUTING.md](CONTRIBUTING.md).

### Código de Conducta

Por favor, sigue nuestro código de conducta para mantener un ambiente de colaboración positivo.

---

## 📜 Licencia y Créditos

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

Agradecimientos a todos los colaboradores y a la comunidad de desarrolladores que han hecho posible este proyecto.

---

## 📫 Contacto y Soporte

Para consultas, puedes contactarnos a través del correo electrónico: soporte@clinica.com.

Si encuentras algún problema, por favor abre un issue en nuestro repositorio de GitHub.

Para más documentación, visita nuestra [documentación adicional](https://github.com/serrano1004/ai-clinica-whatsapp-bot/wiki).

¡Únete a nuestra comunidad y mantente al tanto de las novedades!