# Guía Completa de Instalación - ai-clinica-whatsapp-bot

Esta guía proporciona instrucciones detalladas para instalar y configurar el proyecto **ai-clinica-whatsapp-bot** en diferentes sistemas operativos. Cubriremos los requisitos previos, la instalación paso a paso, la verificación y la solución de problemas comunes.

## Tabla de Contenidos
- [1. Requisitos Previos Detallados](#1-requisitos-previos-detallados)
  - [1.1 Windows](#11-windows)
  - [1.2 macOS](#12-macos)
  - [1.3 Linux](#13-linux)
- [2. Instalación Paso a Paso](#2-instalación-paso-a-paso)
- [3. Tests de Verificación Completa](#3-tests-de-verificación-completa)
- [4. Configuración Avanzada](#4-configuración-avanzada)
- [5. 🐛 Solución de Problemas](#5-solución-de-problemas)
- [6. Configuración de Entorno Virtual](#6-configuración-de-entorno-virtual)
- [7. Próximos Pasos Después de la Instalación](#7-próximos-pasos-después-de-la-instalación)
- [8. Tips y Mejores Prácticas](#8-tips-y-mejores-prácticas)
- [9. Soporte](#9-soporte)

## 1. Requisitos Previos Detallados

### 1.1 Windows
#### Requisitos de Sistema
- **Versión mínima del SO**: Windows 10
- **RAM recomendada**: 4 GB
- **Espacio en disco**: 500 MB
- **Conexión a Internet**: Necesaria para descargar dependencias.

#### Software Requerido
- **Node.js**
  - **Versión mínima requerida**: 16.x
  - **Cómo instalar**: Descargue el instalador desde [nodejs.org](https://nodejs.org/) y siga las instrucciones.
  - **Comando de verificación**: `node -v`
  - **Qué hacer si no está disponible**: Asegúrese de que el instalador se haya ejecutado correctamente y que Node.js esté en el PATH.

- **npm**
  - **Versión mínima requerida**: Incluida con Node.js
  - **Comando de verificación**: `npm -v`

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Descargue desde [code.visualstudio.com](https://code.visualstudio.com/).

### 1.2 macOS
#### Requisitos de Sistema
- **Versión mínima del SO**: macOS 10.15 (Catalina)
- **RAM recomendada**: 4 GB
- **Espacio en disco**: 500 MB
- **Conexión a Internet**: Necesaria para descargar dependencias.

#### Software Requerido
- **Node.js**
  - **Versión mínima requerida**: 16.x
  - **Cómo instalar**: Use Homebrew: `brew install node`
  - **Comando de verificación**: `node -v`

- **npm**
  - **Versión mínima requerida**: Incluida con Node.js
  - **Comando de verificación**: `npm -v`

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Descargue desde [code.visualstudio.com](https://code.visualstudio.com/).

### 1.3 Linux
#### Requisitos de Sistema
- **Versión mínima del SO**: Ubuntu 20.04 o equivalente
- **RAM recomendada**: 4 GB
- **Espacio en disco**: 500 MB
- **Conexión a Internet**: Necesaria para descargar dependencias.

#### Software Requerido
- **Node.js**
  - **Versión mínima requerida**: 16.x
  - **Cómo instalar**: Use el siguiente comando:
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
  - **Comando de verificación**: `node -v`

- **npm**
  - **Versión mínima requerida**: Incluida con Node.js
  - **Comando de verificación**: `npm -v`

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Siga las instrucciones en [code.visualstudio.com](https://code.visualstudio.com/).

## 2. Instalación Paso a Paso

### Paso 1: Clonar el Repositorio
Ejecute el siguiente comando en su terminal:
```bash
git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
```
**Qué esperar**: Se creará una carpeta llamada `ai-clinica-whatsapp-bot` en su directorio actual.

**Cómo verificar éxito**: Navegue a la carpeta clonada:
```bash
cd ai-clinica-whatsapp-bot
```

### Paso 2: Instalar Dependencias
Ejecute el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```
**Tiempo estimado**: 1-2 minutos.

**Qué hace**: Instala todas las dependencias listadas en `package.json`.

### Paso 3: Configuración Inicial
Cree un archivo `.env` en la raíz del proyecto y agregue las variables de entorno necesarias. Un ejemplo de contenido podría ser:
```
WHATSAPP_API_KEY=su_clave_api
```
**Valores por defecto**: Asegúrese de reemplazar `su_clave_api` con su clave real.

### Paso 4: Verificación de Instalación
Ejecute el siguiente comando para iniciar el bot:
```bash
node bot/index.js
```
**Salida esperada**: Debería ver un mensaje que indica que el bot está en funcionamiento.

**Qué hacer si falla**: Revise los mensajes de error en la consola para identificar problemas.

## 3. Tests de Verificación Completa

### Test 1: Verificar Componentes
Ejecute el siguiente comando:
```bash
node bot/index.js
```
**Qué debería mostrar**: Un mensaje indicando que el bot está listo para recibir mensajes.

### Test 2: Verificar Funcionalidad Básica
Envía un mensaje de prueba a tu número de WhatsApp asociado con el bot y verifica que responda correctamente.

### Test 3: Diagnóstico Completo (Opcional)
Ejecute el siguiente script de diagnóstico:
```bash
node diagnostic.js
```
**Qué verifica**: Conexiones de red, estado de las dependencias y configuración.

## 4. Configuración Avanzada

### 4.1 Usar en Diferentes Ubicaciones
Agregue la carpeta del proyecto a su PATH del sistema para facilitar el acceso.

### 4.2 Integración con IDEs
- **Visual Studio Code**
  - **Extensiones recomendadas**: ESLint, Prettier.
  - **Configuración en settings.json**: Asegúrese de que las extensiones estén habilitadas.

### 4.3 Entorno de Producción
Considere usar un servidor dedicado o un servicio en la nube para ejecutar el bot en producción.

### 4.4 Usar con Docker
Si desea usar Docker, cree un `Dockerfile` básico y un `docker-compose.yml` para facilitar la implementación.

## 5. 🐛 Solución de Problemas

### Problema 1: Error de versión de Node.js
- **Síntomas**: Mensaje de error sobre la versión de Node.js.
- **Causa probable**: Versión de Node.js no compatible.
- **Solución**:
  1. Verifique la versión instalada con `node -v`.
  2. Actualice Node.js si es necesario.
- **Comando de diagnóstico**: `node -v`.

### Problema 2: Permiso denegado
- **Síntomas**: Error al intentar ejecutar comandos.
- **Causa probable**: Falta de permisos.
- **Solución**:
  1. Ejecute el comando con `sudo` en Linux/macOS.
  2. Asegúrese de tener permisos de administrador en Windows.

### Problema 3: Módulo no encontrado
- **Síntomas**: Error indicando que un módulo no se puede encontrar.
- **Causa probable**: Dependencia no instalada.
- **Solución**:
  1. Ejecute `npm install` nuevamente.
  2. Verifique el archivo `package.json`.

### Problema 4: Problema de conexión de red
- **Síntomas**: El bot no puede conectarse a la API de WhatsApp.
- **Causa probable**: Problemas de red.
- **Solución**:
  1. Verifique su conexión a Internet.
  2. Asegúrese de que no haya un firewall bloqueando la conexión.

### Problema 5: Conflicto de puertos
- **Síntomas**: Error al iniciar el bot.
- **Causa probable**: Otro servicio está usando el mismo puerto.
- **Solución**:
  1. Cambie el puerto en el archivo de configuración.
  2. Asegúrese de que el puerto esté libre.

### Problema 6: Incompatibilidad de SO
- **Síntomas**: Errores específicos del sistema operativo.
- **Causa probable**: Dependencias no compatibles.
- **Solución**:
  1. Verifique la documentación de cada dependencia.
  2. Asegúrese de que todas las herramientas sean compatibles con su SO.

## 6. Configuración de Entorno Virtual

### Python
Si utiliza Python, cree un entorno virtual con:
```bash
python -m venv venv
```
Active el entorno con:
- **Windows**: `venv\Scripts\activate`
- **macOS/Linux**: `source venv/bin/activate`

### Node.js
Para manejar versiones de Node.js, considere usar `nvm`:
```bash
nvm install 16
nvm use 16
```

## 7. Próximos Pasos Después de la Instalación
- Consulte el archivo `README.md` para obtener información sobre el uso.
- Revise `CONTRIBUTING.md` si desea contribuir al proyecto.
- Pruebe los primeros comandos para interactuar con el bot.

## 8. Tips y Mejores Prácticas
- Mantenga su entorno y dependencias actualizadas.
- Use control de versiones para gestionar dependencias.
- Realice copias de seguridad de su configuración.
- Monitoree actualizaciones de seguridad.

## 9. Soporte
- Para reportar problemas, abra un issue en el repositorio de GitHub.
- Únase a la comunidad en el foro de discusión.
- Para consultas directas, envíe un correo a soporte@ai-clinica-whatsapp-bot.com.
- Consulte la documentación completa en el repositorio.