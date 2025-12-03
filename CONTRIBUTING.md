# Contribuyendo a ai-clinica-whatsapp-bot

¡Bienvenido a la guía de contribución de ai-clinica-whatsapp-bot! Agradecemos tu interés en colaborar con nuestro proyecto. Aquí encontrarás toda la información necesaria para contribuir de manera efectiva. Puedes ayudarnos reportando errores, sugiriendo nuevas características, mejorando la documentación o incluso escribiendo pruebas. ¡Tu participación es muy valiosa para nosotros!

## Código de Conducta

En ai-clinica-whatsapp-bot, valoramos un ambiente inclusivo y respetuoso. Todos los colaboradores deben tratarse con respeto y dignidad. No toleramos el acoso de ningún tipo, ya sea en persona o en línea. Si experimentas o presencias un comportamiento inapropiado, por favor, repórtalo a los mantenedores del proyecto. Juntos, podemos crear un espacio seguro y acogedor para todos.

## Formas de Contribuir

Existen varias maneras en las que puedes contribuir a ai-clinica-whatsapp-bot:

- **Reportar errores**: Si encuentras un error, por favor, infórmanos.
- **Sugerir características**: Nos encantaría escuchar tus ideas para mejorar el bot.
- **Mejorar la documentación**: Ayúdanos a mantener la documentación clara y actualizada.
- **Escribir pruebas**: Contribuye a la calidad del código escribiendo pruebas.
- **Responder preguntas**: Si tienes conocimientos, ayuda a otros en los issues.
- **Mantener traducciones**: Ayuda a que el bot sea accesible en diferentes idiomas.

## Reportando Errores

Para reportar un error, por favor incluye la siguiente información:

1. Descripción clara del problema.
2. Pasos para reproducir el error.
3. Comportamiento esperado.
4. Capturas de pantalla (si es posible).

Puedes reportar errores en la sección de [issues](https://github.com/serrano1004/ai-clinica-whatsapp-bot/issues) de nuestro repositorio. Utiliza el siguiente formato para tu reporte:

```
**Descripción del error:**
[Descripción aquí]

**Pasos para reproducir:**
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

**Comportamiento esperado:**
[Descripción aquí]
```

## Sugerencias de Características

Si deseas sugerir una nueva característica, por favor describe la funcionalidad que te gustaría ver. Incluye un caso de uso y ejemplos de cómo podría ser implementada. Utiliza el siguiente formato:

```
**Descripción de la característica:**
[Descripción aquí]

**Caso de uso:**
[Descripción aquí]

**Ejemplos:**
- [Ejemplo 1]
- [Ejemplo 2]
```

## Configuración del Desarrollo

Para comenzar a contribuir, sigue estos pasos:

1. **Clonar el repositorio**: Usa el siguiente comando:
   ```
   git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
   ```
2. **Hacer un fork**: Ve a la página del repositorio y haz clic en "Fork".
3. **Instalar dependencias de desarrollo**: Navega a la carpeta del proyecto y ejecuta:
   ```
   npm install
   ```
   o el comando correspondiente según el stack tecnológico utilizado.
4. **Ejecutar pruebas localmente**: Usa el comando:
   ```
   npm test
   ```
   para asegurarte de que todo funcione correctamente.
5. **Herramientas recomendadas**: Se sugiere usar Visual Studio Code o cualquier IDE que soporte el stack tecnológico.
6. **Configuración del IDE**: Asegúrate de tener configuradas las extensiones necesarias para el formato y linting.

## Flujo de Trabajo: Fork → Rama → PR

Sigue estos pasos para contribuir:

1. **Forkea el repositorio**.
2. **Clona tu fork**:
   ```
   git clone https://github.com/tu_usuario/ai-clinica-whatsapp-bot.git
   ```
3. **Crea una rama descriptiva**:
   - Convención: `feature/nombre` o `fix/nombre`.
4. **Realiza cambios** en tu rama.
5. **Haz commits claros**:
   ```
   git commit -m "Descripción clara del cambio"
   ```
6. **Sube tus cambios**:
   ```
   git push origin tu_rama
   ```
7. **Crea un Pull Request** en la rama principal del repositorio original.
8. **Responde a las revisiones** de los mantenedores.
9. **Fusiona** tu PR una vez aprobado.

## Guía de Estilo de Código

### Python:
- Sigue las convenciones de PEP 8.
- Usa anotaciones de tipo.
- Incluye docstrings en funciones y clases.

**Ejemplo de buen código:**
```python
def suma(a: int, b: int) -> int:
    """Devuelve la suma de a y b."""
    return a + b
```

### JavaScript/TypeScript:
- Usa la configuración de ESLint.
- Aplica formato con Prettier.
- Sigue convenciones de nomenclatura.

**Ejemplo de buen código:**
```javascript
function suma(a, b) {
    return a + b;
}
```

### Otros:
- Sigue las convenciones del lenguaje utilizado.
- Proporciona ejemplos prácticos en la documentación.

## Pruebas

Para las pruebas, utilizamos [nombre del framework de pruebas]. Para ejecutar las pruebas, usa el comando:
```
npm test
```
Asegúrate de que la cobertura de pruebas sea adecuada. Para escribir pruebas, sigue el formato del framework utilizado.

**Ejemplo de prueba:**
```python
def test_suma():
    assert suma(1, 2) == 3
```

## Commits y Mensajes

Usamos el estándar de **Commits Convencionales**. Los tipos de commits incluyen: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

**Ejemplos de buenos mensajes:**
- `feat: agregar nueva funcionalidad de búsqueda`
- `fix: corregir error en la validación de datos`

Realiza **commits atómicos** para facilitar la revisión y el seguimiento de cambios. Esto es importante para mantener un historial claro.

## Proceso de Pull Request

Antes de crear un Pull Request, asegúrate de que tu rama esté actualizada con la rama principal. Incluye una descripción clara de los cambios realizados y referencia cualquier issue relacionado. Responde a los comentarios y sugerencias de los revisores y ten paciencia durante el proceso de revisión.

## Revisión de Código

Los revisores buscarán que los cambios cumplan con los criterios de aceptación establecidos. Asegúrate de que tu código esté bien documentado y que incluya pruebas. Aprende a recibir feedback constructivo y a hacer seguimiento de las revisiones.

## Documentación

Es importante documentar todos los cambios realizados. Actualiza la documentación en el README y utiliza docstrings para describir funciones y clases. Proporciona ejemplos claros y concisos.

## Reconocimiento

Reconocemos a todos los contribuidores en nuestras notas de lanzamiento. Si has contribuido, tu nombre aparecerá en la lista de contribuidores. Agradecemos sinceramente a todos los que han ayudado a mejorar ai-clinica-whatsapp-bot.

## Contacto y Preguntas

Si tienes preguntas, no dudes en contactarnos a través del correo electrónico: [tu_email@ejemplo.com]. También puedes unirte a nuestra comunidad en Discord/Slack o participar en las discusiones en GitHub. ¡Estamos aquí para ayudarte!