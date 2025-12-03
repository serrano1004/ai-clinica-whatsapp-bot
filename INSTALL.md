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
  - **Qué hacer si no está disponible**: Asegúrese de que el instalador se haya ejecutado correctamente.

- **npm**
  - **Versión mínima requerida**: Incluido con Node.js
  - **Comando de verificación**: `npm -v`
  - **Qué hacer si no está disponible**: Reinstale Node.js.

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
  - **Qué hacer si no está disponible**: Instale Homebrew desde [brew.sh](https://brew.sh/).

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
  - **Qué hacer si no está disponible**: Verifique que el comando se haya ejecutado correctamente.

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

**Cómo verificar éxito**: Navegue a la carpeta con `cd ai-clinica-whatsapp-bot` y liste los archivos con `ls`.

### Paso 2: Instalar Dependencias
Dentro de la carpeta del proyecto, ejecute:
```bash
npm install
```
**Tiempo estimado**: 1-2 minutos.

**Qué hace**: Instala todas las dependencias necesarias para el proyecto.

### Paso 3: Configuración Inicial
Cree un archivo `.env` en la raíz del proyecto y agregue las variables necesarias. Un ejemplo de contenido podría ser:
```
WHATSAPP_API_KEY=su_api_key
```
**Valores por defecto**: Asegúrese de reemplazar `su_api_key` con su clave real.

### Paso 4: Verificación de Instalación
Para verificar que la instalación fue exitosa, ejecute:
```bash
node bot/index.js
```
**Salida esperada**: Debería ver un mensaje indicando que el bot está en funcionamiento.

**Qué hacer si falla**: Revise los mensajes de error en la consola para identificar el problema.

## 3. Tests de Verificación Completa

### Test 1: Verificar Componentes
Ejecute el siguiente comando:
```bash
npm list
```
**Qué debería mostrar**: Una lista de todas las dependencias instaladas.

**Qué hacer si falla**: Asegúrese de que todas las dependencias se instalaron correctamente.

### Test 2: Verificar Funcionalidad Básica
Envía un mensaje a través de WhatsApp para probar la funcionalidad del bot. Deberías recibir una respuesta automática.

### Test 3: Diagnóstico Completo (Opcional)
Ejecute el siguiente script de diagnóstico:
```bash
node diagnose.js
```
**Qué verifica**: Conexiones, dependencias y configuraciones.

**Cómo interpretar resultados**: Revise los mensajes para identificar cualquier problema.

## 4. Configuración Avanzada

### 4.1 Usar en Diferentes Ubicaciones
Agregue el directorio del proyecto a su PATH para acceder desde cualquier lugar:
```bash
export PATH=$PATH:/ruta/a/ai-clinica-whatsapp-bot
```

### 4.2 Integración con IDEs
- **Visual Studio Code**
  - **Extensiones recomendadas**: ESLint, Prettier.
  - **Configuración en settings.json**: Asegúrese de habilitar el formato automático.

### 4.3 Entorno de Producción
- **Diferencias con desarrollo**: Asegúrese de usar variables de entorno adecuadas.
- **Checklist de configuración**: Revise la seguridad y el rendimiento.

### 4.4 Usar con Docker
Si desea usar Docker, cree un `Dockerfile` básico:
```dockerfile
FROM node:16
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "bot/index.js"]
```

## 5. 🐛 Solución de Problemas

### Problema 1: Error de versión de Node.js
- **Síntomas**: Mensaje de error al ejecutar `node -v`.
- **Causa probable**: Node.js no está instalado o la versión es incorrecta.
- **Solución**:
  - Paso 1: Verifique la instalación.
  - Paso 2: Reinstale Node.js.
- **Comando de diagnóstico**: `node -v`.

### Problema 2: Permiso denegado
- **Síntomas**: Error al intentar ejecutar un comando.
- **Causa probable**: Falta de permisos.
- **Solución**:
  - Paso 1: Use `sudo` para ejecutar el comando.
  - Paso 2: Verifique los permisos de la carpeta.
- **Comando de diagnóstico**: `ls -l`.

### Problema 3: Módulo/paquete no encontrado
- **Síntomas**: Error al ejecutar el bot.
- **Causa probable**: Dependencias no instaladas.
- **Solución**:
  - Paso 1: Ejecute `npm install`.
  - Paso 2: Verifique el archivo `package.json`.
- **Comando de diagnóstico**: `npm list`.

### Problema 4: Problema de conexión de red
- **Síntomas**: El bot no responde.
- **Causa probable**: Problemas de red.
- **Solución**:
  - Paso 1: Verifique su conexión a Internet.
  - Paso 2: Asegúrese de que el API de WhatsApp esté accesible.
- **Comando de diagnóstico**: `ping api.whatsapp.com`.

### Problema 5: Conflicto de puertos
- **Síntomas**: El bot no se inicia.
- **Causa probable**: Otro servicio está usando el mismo puerto.
- **Solución**:
  - Paso 1: Identifique el servicio en conflicto.
  - Paso 2: Cambie el puerto en la configuración.
- **Comando de diagnóstico**: `netstat -tuln`.

### Problema 6: Incompatibilidad de SO
- **Síntomas**: Errores al ejecutar en un SO no soportado.
- **Causa probable**: Dependencias no compatibles.
- **Solución**:
  - Paso 1: Verifique los requisitos del sistema.
  - Paso 2: Considere usar una máquina virtual.
- **Comando de diagnóstico**: `uname -a`.

## 6. Configuración de Entorno Virtual

### Python (si aplica)
- **Cómo crear venv**:
  ```bash
  python -m venv venv
  ```
- **Cómo activar/desactivar**:
  ```bash
  source venv/bin/activate  # Activar
  deactivate  # Desactivar
  ```
- **Qué es y por qué usarlo**: Aísla las dependencias del proyecto.

### Node.js (si aplica)
- **nvm setup**: Instale nvm y use:
  ```bash
  nvm install 16
  nvm use 16
  ```

## 7. Próximos Pasos Después de la Instalación
- Consulte el archivo `README.md` para obtener instrucciones sobre el uso.
- Revise `CONTRIBUTING.md` si desea contribuir al proyecto.
- Pruebe los primeros comandos para interactuar con el bot.
- Visite el repositorio para más ayuda.

## 8. Tips y Mejores Prácticas
- Mantenga su entorno y dependencias actualizadas.
- Use control de versiones para gestionar dependencias.
- Realice copias de seguridad de su configuración.
- Monitoree actualizaciones de seguridad.

## 9. Soporte
- Para reportar problemas, abra un issue en el repositorio.
- Únase a la comunidad en el foro.
- Para consultas directas, envíe un correo a soporte@ai-clinica-whatsapp-bot.com.
- Consulte la documentación completa en el repositorio.