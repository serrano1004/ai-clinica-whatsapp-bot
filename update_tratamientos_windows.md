# Programar actualización automática de tratamientos en Windows

Este documento explica cómo programar la ejecución diaria del script que actualiza el archivo `tratamientos.json` usando el Programador de tareas de Windows.

## Requisitos
- Tener Node.js instalado
- El script `services/updateTratamientos.js` funcionando correctamente

## Pasos para programar la tarea

1. **Abrir el Programador de tareas**
   - Pulsa `Win + R`, escribe `taskschd.msc` y pulsa Enter.

2. **Crear una nueva tarea básica**
   - En el panel derecho, haz clic en "Crear tarea básica...".
   - Ponle un nombre, por ejemplo: `Actualizar tratamientos clínica`

3. **Configurar el desencadenador**
   - Elige "Diariamente" y selecciona la hora a la que quieres que se ejecute (por ejemplo, 7:00 AM).

4. **Configurar la acción**
   - Elige "Iniciar un programa"
   - En "Programa o script" escribe:
     ```
     powershell.exe
     ```
   - En "Agregar argumentos (opcional)" escribe:
     ```
     -Command "cd '[path to your project]\ai-clinica-whatsapp-bot'; node .\services\updateTratamientos.js"
     ```
   - En "Iniciar en (opcional)" puedes dejarlo vacío.

5. **Finalizar y guardar**
   - Revisa el resumen y haz clic en "Finalizar".

6. **Comprobar la tarea**
   - Puedes probar la tarea haciendo clic derecho sobre ella y seleccionando "Ejecutar".
   - Verifica que el archivo `tratamientos.json` se actualiza correctamente.

---

## Notas
- Si prefieres usar un archivo `.bat`, puedes crearlo y programar la tarea para que ejecute ese archivo en vez de usar PowerShell directamente.
- Si el script requiere permisos de red, asegúrate de que el usuario de la tarea tenga acceso a Internet.
- Puedes modificar la frecuencia y hora según tus necesidades.

---
