# Contribuyendo a ai-clinica-whatsapp-bot

## Bienvenida

¡Bienvenido a ai-clinica-whatsapp-bot! Agradecemos tu interés en contribuir a este proyecto. Aquí, cada contribución cuenta, ya sea reportando errores, sugiriendo nuevas características, o mejorando la documentación. Tu participación es fundamental para hacer de ai-clinica-whatsapp-bot una herramienta aún más útil y efectiva. ¡Esperamos verte pronto en nuestras discusiones y colaboraciones!

## Código de Conducta

En ai-clinica-whatsapp-bot, valoramos un ambiente inclusivo y respetuoso. Todos los colaboradores deben tratarse con respeto y dignidad. No toleramos el acoso de ningún tipo, ya sea en persona o en línea. Si eres testigo de un comportamiento inapropiado, por favor repórtalo a los mantenedores del proyecto. Creemos que la diversidad enriquece nuestro trabajo y estamos comprometidos a crear un espacio seguro para todos.

## Formas de Contribuir

Hay muchas maneras en las que puedes contribuir a ai-clinica-whatsapp-bot:

- **Reportar errores**: Si encuentras un error, por favor infórmanos.
- **Sugerir características**: Si tienes ideas para nuevas funcionalidades, ¡queremos escucharlas!
- **Mejorar la documentación**: Ayúdanos a mantener la documentación clara y actualizada.
- **Escribir pruebas**: Contribuye a la calidad del código escribiendo pruebas.
- **Responder preguntas en los issues**: Si tienes conocimientos que pueden ayudar a otros, no dudes en participar.
- **Mantener traducciones**: Ayuda a que el proyecto sea accesible para más personas.

## Reportando Errores

Para reportar un error, por favor incluye la siguiente información:

1. Descripción clara del problema.
2. Pasos para reproducir el error.
3. Comportamiento esperado y comportamiento actual.
4. Capturas de pantalla o registros de error si es posible.

Puedes reportar errores en la sección de [issues](https://github.com/serrano1004/ai-clinica-whatsapp-bot/issues) de nuestro repositorio. Utiliza el siguiente formato para tu reporte:

```
**Descripción del error:**
...

**Pasos para reproducir:**
1. ...
2. ...
3. ...

**Comportamiento esperado:**
...

**Comportamiento actual:**
...
```

## Sugerencias de Características

Si deseas sugerir una nueva característica, por favor describe lo siguiente:

1. La funcionalidad que deseas agregar.
2. Un caso de uso que justifique la necesidad de esta característica.
3. Ejemplos de cómo podría implementarse.

Puedes utilizar el siguiente formato para tu solicitud:

```
**Descripción de la característica:**
...

**Caso de uso:**
...

**Ejemplos:**
...
```

## Configuración del Desarrollo

Para comenzar a contribuir, sigue estos pasos:

1. **Clona el repositorio**: Usa el siguiente comando:
   ```
   git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
   ```
2. **Haz un fork del repositorio**: Ve a la página del repositorio y haz clic en "Fork".
3. **Instala las dependencias de desarrollo**: Navega a la carpeta del proyecto y ejecuta:
   ```
   npm install
   ```
   o, si usas Python:
   ```
   pip install -r requirements.txt
   ```
4. **Ejecuta pruebas localmente**: Asegúrate de que todo funcione correctamente ejecutando:
   ```
   npm test
   ```
   o para Python:
   ```
   pytest
   ```
5. **Herramientas recomendadas**: Se sugiere usar Visual Studio Code o PyCharm para una mejor experiencia de desarrollo.

## Flujo de Trabajo: Fork → Rama → PR

Sigue estos pasos para contribuir:

1. **Forkea el repositorio**: Haz clic en el botón "Fork" en la parte superior derecha.
2. **Clona tu fork**: Usa el comando `git clone` para clonar tu fork en tu máquina local.
3. **Crea una rama descriptiva**: Usa una convención como `feature/nueva-caracteristica` o `fix/error`.
4. **Realiza cambios**: Haz las modificaciones necesarias en tu código.
5. **Realiza commits claros**: Asegúrate de que tus mensajes de commit sean descriptivos.
6. **Empuja tus cambios a tu rama**: Usa `git push origin nombre-de-tu-rama`.
7. **Crea un Pull Request**: Ve a la página de tu fork y haz clic en "New Pull Request".
8. **Responde a las revisiones**: Esté preparado para recibir comentarios y realizar ajustes.
9. **Fusiona**: Una vez aprobado, puedes fusionar tu PR.

## Guía de Estilo de Código

### Python

- **PEP 8**: Sigue las convenciones de estilo de Python.
- **Type hints**: Utiliza anotaciones de tipo para mayor claridad.
- **Docstrings**: Documenta tus funciones y clases.
  
Ejemplo de buen código:
```python
def suma(a: int, b: int) -> int:
    """Devuelve la suma de a y b."""
    return a + b
```

Ejemplo de mal código:
```python
def suma(a, b):
    return a + b
```

### JavaScript/TypeScript

- **Configuración de ESLint**: Asegúrate de que tu código pase las reglas de ESLint.
- **Formato Prettier**: Usa Prettier para mantener un formato consistente.
- **Convenciones de nombres**: Usa camelCase para variables y funciones.

## Pruebas

Usamos [Jest](https://jestjs.io/) para las pruebas en JavaScript y [pytest](https://docs.pytest.org/en/stable/) para Python. Para ejecutar las pruebas, utiliza:

```
npm test
```
o
```
pytest
```

Asegúrate de que tu cobertura de pruebas sea adecuada y escribe pruebas para cualquier nueva funcionalidad que agregues.

## Commits y Mensajes

Utilizamos el estándar de **Commits Convencionales**. Los tipos de commits incluyen:

- `feat`: Nueva característica
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios de formato
- `refactor`: Cambios en el código que no afectan el comportamiento
- `test`: Añadir pruebas
- `chore`: Otras tareas

Ejemplo de un buen mensaje de commit:
```
feat: agregar función de búsqueda
```

Asegúrate de que tus commits sean atómicos y claros.

## Proceso de Pull Request

Antes de enviar un Pull Request:

1. Asegúrate de que tu rama esté actualizada con la rama principal.
2. Incluye una descripción clara de los cambios realizados.
3. Referencia cualquier issue relacionado.
4. Responde a los comentarios y sugerencias de los revisores.
5. Ten paciencia durante el proceso de revisión.

## Revisión de Código

Los revisores buscarán:

- Criterios de aceptación cumplidos.
- Calidad del código.
- Pruebas adecuadas.
- Documentación actualizada.

Recuerda que la revisión de código es una oportunidad para aprender y mejorar.

## Documentación

Es importante documentar cualquier cambio que realices. Asegúrate de actualizar:

- **Docstrings**: Para funciones y clases.
- **README**: Si realizas cambios significativos en la funcionalidad.

Ejemplo de un docstring:
```python
def multiplicar(a: int, b: int) -> int:
    """Devuelve el producto de a y b."""
    return a * b
```

## Reconocimiento

Agradecemos a todos nuestros contribuidores. Tu nombre puede aparecer en la lista de contribuidores en el repositorio y en las notas de lanzamiento. ¡Gracias por tu apoyo!

## Contacto y Preguntas

Si tienes preguntas, no dudes en contactarnos:

- **Email**: tu-email@ejemplo.com
- **Comunidad en Discord/Slack**: Únete a nuestro canal para discutir.
- **Discusiones en GitHub**: Participa en las discusiones abiertas.

¡Esperamos verte pronto contribuyendo a ai-clinica-whatsapp-bot!