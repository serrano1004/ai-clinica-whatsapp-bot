# Guía Completa de Instalación - ai-clinica-whatsapp-bot

Esta guía proporciona instrucciones detalladas para instalar y configurar el proyecto **ai-clinica-whatsapp-bot** en diferentes sistemas operativos. Cubriremos los requisitos previos, la instalación paso a paso, la verificación y la solución de problemas comunes.

## Tabla de Contenidos
- [1. Requisitos Previos Detallados](#1-requisitos-previos-detallados)
- [2. Instalación Paso a Paso](#2-instalación-paso-a-paso)
- [3. Tests de Verificación Completa](#3-tests-de-verificación-completa)
- [4. Configuración Avanzada](#4-configuración-avanzada)
- [5. Solución de Problemas](#5-solución-de-problemas)
- [6. Configuración de Entorno Virtual](#6-configuración-de-entorno-virtual)
- [7. Próximos Pasos Después de la Instalación](#7-próximos-pasos-después-de-la-instalación)
- [8. Tips y Mejores Prácticas](#8-tips-y-mejores-prácticas)
- [9. Soporte](#9-soporte)

## 1. Requisitos Previos Detallados

### Windows
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
  - **Versión mínima requerida**: Incluido con Node.js
  - **Comando de verificación**: `npm -v`
  - **Qué hacer si no está disponible**: Reinstale Node.js.

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Descargue desde [code.visualstudio.com](https://code.visualstudio.com/).

### macOS
#### Requisitos de Sistema
- **Versión mínima del SO**: macOS 10.15
- **RAM recomendada**: 4 GB
- **Espacio en disco**: 500 MB
- **Conexión a Internet**: Necesaria para descargar dependencias.

#### Software Requerido
- **Node.js**
  - **Versión mínima requerida**: 16.x
  - **Cómo instalar**: Use Homebrew: `brew install node`
  - **Comando de verificación**: `node -v`
  - **Qué hacer si no está disponible**: Instale Homebrew y luego Node.js.

#### Herramientas Opcionales
- **Visual Studio Code**
  - **Para qué sirve**: Editor de código recomendado.
  - **Cómo instalar**: Descargue desde [code.visualstudio.com](https://code.visualstudio.com/).

### Linux
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
Ejecute el siguiente comando:
```bash
npm install
```
**Tiempo estimado**: 1-5 minutos, dependiendo de la velocidad de su conexión a Internet.

**Qué hace**: Instala todas las dependencias necesarias para el proyecto.

### Paso 3: Configuración Inicial
Cree un archivo `.env` en la raíz del proyecto y agregue las variables necesarias. Un ejemplo de contenido podría ser:
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

**Qué hacer si falla**: Verifique los mensajes de error en la consola y asegúrese de que todas las dependencias estén instaladas correctamente.

## 3. Tests de Verificación Completa

### Test 1: Verificar Componentes
Ejecute el siguiente comando:
```bash
node bot/index.js
```
**Qué debería mostrar**: Un mensaje que indica que el bot se ha iniciado correctamente.

**Qué hacer si falla**: Revise los logs para identificar el problema.

### Test 2: Verificar Funcionalidad Básica
Envía un mensaje de prueba a través de WhatsApp y verifica que el bot responda.

### Test 3: Diagnóstico Completo (Opcional)
Cree un script de diagnóstico que verifique las dependencias:
```bash
npm list
```
**Qué verifica**: Asegura que todas las dependencias estén instaladas.

## 4. Configuración Avanzada

### 4.1 Usar en Diferentes Ubicaciones
Agregue la carpeta del proyecto a su PATH para facilitar el acceso.

### 4.2 Integración con IDEs
#### Visual Studio Code
- **Extensiones recomendadas**: ESLint, Prettier.
- **Configuración en settings.json**: Asegúrese de que las extensiones estén habilitadas.

### 4.3 Entorno de Producción
Considere usar un servidor dedicado para ejecutar el bot en producción.

### 4.4 Usar con Docker
Cree un `Dockerfile` básico para contenerizar la aplicación.

## 5. Solución de Problemas

### Problema 1: Error de versión de Node.js
- **Síntomas**: Mensaje de error sobre la versión de Node.js.
- **Causa probable**: Versión de Node.js no compatible.
- **Solución**:
  1. Verifique la versión instalada con `node -v`.
  2. Actualice Node.js si es necesario.

### Problema 2: Permiso denegado
- **Síntomas**: Error de permisos al ejecutar comandos.
- **Causa probable**: Falta de permisos de usuario.
- **Solución**:
  1. Use `sudo` para ejecutar el comando.
  2. Verifique los permisos de la carpeta del proyecto.

### Problema 3: Módulo no encontrado
- **Síntomas**: Error indicando que un módulo no se puede encontrar.
- **Causa probable**: Dependencia no instalada.
- **Solución**:
  1. Ejecute `npm install` nuevamente.
  2. Verifique el archivo `package.json`.

### Problema 4: Problema de conexión de red
- **Síntomas**: Error al intentar conectarse a la API de WhatsApp.
- **Causa probable**: Conexión a Internet inestable.
- **Solución**:
  1. Verifique su conexión a Internet.
  2. Intente reiniciar su router.

### Problema 5: Conflicto de puertos
- **Síntomas**: Error indicando que el puerto ya está en uso.
- **Causa probable**: Otro servicio está utilizando el mismo puerto.
- **Solución**:
  1. Identifique el servicio en uso con `lsof -i :<puerto>`.
  2. Cambie el puerto en la configuración del bot.

### Problema 6: Incompatibilidad de SO
- **Síntomas**: Errores al ejecutar en un SO no soportado.
- **Causa probable**: Dependencias no compatibles.
- **Solución**:
  1. Asegúrese de estar usando un SO compatible.
  2. Consulte la documentación para soluciones específicas.

## 6. Configuración de Entorno Virtual

### Python
Si se usa Python, cree un entorno virtual con:
```bash
python -m venv venv
```
Active el entorno con:
```bash
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate  # Windows
```

### Node.js
Use `nvm` para gestionar versiones de Node.js. Instale `nvm` y cambie versiones con:
```bash
nvm install 16
nvm use 16
```

## 7. Próximos Pasos Después de la Instalación
- Consulte el archivo `README.md` para obtener instrucciones sobre el uso.
- Revise `CONTRIBUTING.md` si desea contribuir al proyecto.
- Pruebe los primeros comandos para asegurarse de que todo funcione correctamente.

## 8. Tips y Mejores Prácticas
- Mantenga su entorno actualizado.
- Use control de versiones para las dependencias.
- Realice copias de seguridad de la configuración.
- Monitoree actualizaciones de seguridad.

## 9. Soporte
- Para reportar problemas, abra un issue en el repositorio de GitHub.
- Únase a la comunidad en foros relacionados.
- Para consultas directas, envíe un correo a soporte@ai-clinica-whatsapp-bot.com.