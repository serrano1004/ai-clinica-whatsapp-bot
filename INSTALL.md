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
- [5. Solución de Problemas](#5-solución-de-problemas)
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
  - **Qué hacer si no está disponible**: Asegúrese de que el instalador se haya ejecutado correctamente.

- **npm**
  - **Versión mínima requerida**: Incluido con Node.js
  - **Comando de verificación**: `npm -v`
  - **Qué hacer si no está disponible**: Reinstalar Node.js.

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Descargue desde [code.visualstudio.com](https://code.visualstudio.com/).

### 1.2 macOS
#### Requisitos de Sistema
- **Versión mínima del SO**: macOS Mojave (10.14)
- **RAM recomendada**: 4 GB
- **Espacio en disco**: 500 MB
- **Conexión a Internet**: Necesaria para descargar dependencias.

#### Software Requerido
- **Node.js**
  - **Versión mínima requerida**: 16.x
  - **Cómo instalar**: Use Homebrew: `brew install node`
  - **Comando de verificación**: `node -v`
  - **Qué hacer si no está disponible**: Instalar Homebrew desde [brew.sh](https://brew.sh/).

- **npm**
  - **Versión mínima requerida**: Incluido con Node.js
  - **Comando de verificación**: `npm -v`
  - **Qué hacer si no está disponible**: Reinstalar Node.js.

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
  - **Qué hacer si no está disponible**: Asegúrese de que el repositorio de Node.js esté agregado correctamente.

- **npm**
  - **Versión mínima requerida**: Incluido con Node.js
  - **Comando de verificación**: `npm -v`
  - **Qué hacer si no está disponible**: Reinstalar Node.js.

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
Cree un archivo `.env` en la raíz del proyecto y agregue las variables de entorno necesarias. Un ejemplo de contenido es:
```
WHATSAPP_API_KEY=su_api_key
```
**Valores por defecto**: Asegúrese de reemplazar `su_api_key` con su clave real.

### Paso 4: Verificación de Instalación
Para verificar que la instalación fue exitosa, ejecute:
```bash
npm start
```
**Salida esperada**: Debería ver un mensaje que indica que el bot está en funcionamiento.

**Qué hacer si falla**: Revise los mensajes de error en la consola para identificar problemas.

## 3. Tests de Verificación Completa

### Test 1: Verificar Componentes
Ejecute el siguiente comando:
```bash
npm run test
```
**Qué debería mostrar**: Un resumen de las pruebas realizadas y si todas han pasado.

**Qué hacer si falla**: Revise los errores mostrados y ajuste el código según sea necesario.

### Test 2: Verificar Funcionalidad Básica
Envía un mensaje de prueba a través de WhatsApp y verifica que el bot responda correctamente.

### Test 3: Diagnóstico Completo (Opcional)
Ejecute el siguiente script de diagnóstico:
```bash
node diagnostic.js
```
**Qué verifica**: Comprueba la conectividad y la configuración del bot.

**Cómo interpretar resultados**: Si hay errores, se mostrarán en la consola con sugerencias para solucionarlos.

## 4. Configuración Avanzada

### 4.1 Usar en Diferentes Ubicaciones
- **Agregar a PATH del sistema**: Asegúrese de que la carpeta de instalación de Node.js esté en su variable PATH.
- **Crear alias**: Puede crear un alias en su terminal para facilitar el acceso al bot.

### 4.2 Integración con IDEs
- **Visual Studio Code**
  - **Extensiones recomendadas**: ESLint, Prettier.
  - **Configuración en settings.json**: Asegúrese de que la configuración de formato esté habilitada.

### 4.3 Entorno de Producción
- **Diferencias con desarrollo**: Asegúrese de que las variables de entorno estén configuradas correctamente para producción.
- **Checklist de configuración**: Revise la configuración de seguridad y acceso.

### 4.4 Usar con Docker
Si desea usar Docker, cree un `Dockerfile` básico y siga las instrucciones en la documentación de Docker.

## 5. Solución de Problemas

### Problema 1: Error de versión de Node.js
- **Síntomas**: Mensaje de error relacionado con la versión.
- **Causa probable**: Versión de Node.js no compatible.
- **Solución**:
  - Paso 1: Verifique la versión con `node -v`.
  - Paso 2: Actualice Node.js si es necesario.
- **Comando de diagnóstico**: `node -v`.

### Problema 2: Permiso denegado
- **Síntomas**: Mensaje de error al intentar ejecutar comandos.
- **Causa probable**: Falta de permisos.
- **Solución**:
  - Paso 1: Ejecute el comando con `sudo` (en Linux/macOS).
  - Paso 2: Asegúrese de tener permisos de administrador.
- **Comando de diagnóstico**: `ls -l`.

### Problema 3: Módulo no encontrado
- **Síntomas**: Error al intentar ejecutar el bot.
- **Causa probable**: Dependencias no instaladas.
- **Solución**:
  - Paso 1: Ejecute `npm install` nuevamente.
  - Paso 2: Verifique el archivo `package.json`.
- **Comando de diagnóstico**: `npm list`.

### Problema 4: Problema de conexión de red
- **Síntomas**: El bot no puede conectarse a la API de WhatsApp.
- **Causa probable**: Problemas de red.
- **Solución**:
  - Paso 1: Verifique su conexión a Internet.
  - Paso 2: Asegúrese de que no haya un firewall bloqueando la conexión.
- **Comando de diagnóstico**: `ping api.whatsapp.com`.

### Problema 5: Conflicto de puertos
- **Síntomas**: Error al iniciar el bot.
- **Causa probable**: Otro servicio está utilizando el mismo puerto.
- **Solución**:
  - Paso 1: Identifique el servicio en conflicto.
  - Paso 2: Cambie el puerto en la configuración del bot.
- **Comando de diagnóstico**: `netstat -tuln`.

### Problema 6: Incompatibilidad de SO
- **Síntomas**: El bot no se ejecuta en su sistema operativo.
- **Causa probable**: Dependencias no compatibles.
- **Solución**:
  - Paso 1: Verifique los requisitos del sistema.
  - Paso 2: Considere usar un entorno virtual o Docker.
- **Comando de diagnóstico**: `uname -a`.

## 6. Configuración de Entorno Virtual

### Python
Si está utilizando Python, puede crear un entorno virtual con:
```bash
python -m venv venv
```
**Cómo activar/desactivar**:
- **Activar**: `source venv/bin/activate` (Linux/macOS) o `venv\Scripts\activate` (Windows).
- **Desactivar**: `deactivate`.

### Node.js
Para gestionar versiones de Node.js, considere usar `nvm`:
```bash
nvm install 16
nvm use 16
```

## 7. Próximos Pasos Después de la Instalación
- Consulte el archivo `README.md` para obtener información sobre el uso.
- Revise `CONTRIBUTING.md` si desea contribuir al proyecto.
- Pruebe los primeros comandos para familiarizarse con el bot.
- Para más ayuda, consulte la documentación completa.

## 8. Tips y Mejores Prácticas
- Mantenga su entorno y dependencias actualizadas.
- Utilice control de versiones para gestionar dependencias.
- Realice copias de seguridad de su configuración.
- Monitoree actualizaciones de seguridad.
- Asegúrese de que su API key esté protegida.

## 9. Soporte
- Para reportar problemas, abra un issue en el repositorio de GitHub.
- Únase a la comunidad en foros relacionados.
- Para consultas directas, envíe un correo a soporte@ai-clinica-whatsapp-bot.com.
- Consulte la documentación completa en el repositorio.