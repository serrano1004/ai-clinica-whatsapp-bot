# Contribuyendo a ai-clinica-whatsapp-bot

## Bienvenida

¡Bienvenido a ai-clinica-whatsapp-bot! Agradecemos tu interés en contribuir a este proyecto. Aquí, valoramos la colaboración y la comunidad, y estamos emocionados de que quieras ser parte de ella. Puedes contribuir de diversas maneras: reportando errores, sugiriendo nuevas características, mejorando la documentación o incluso escribiendo pruebas. ¡Tu ayuda es muy apreciada!

## Código de Conducta

En ai-clinica-whatsapp-bot, nos comprometemos a crear un entorno acogedor y respetuoso para todos los colaboradores. Esperamos que todos los participantes se traten con respeto y consideración. No toleramos el acoso en ninguna forma, ya sea en persona o en línea. Si eres testigo de un comportamiento inapropiado, por favor, repórtalo a los mantenedores del proyecto. Juntos, podemos mantener un espacio seguro y positivo para todos.

## Formas de Contribuir

Existen muchas maneras de contribuir a ai-clinica-whatsapp-bot:

- **Reportar errores**: Si encuentras un error, no dudes en informarlo.
- **Sugerir características**: Si tienes ideas para mejorar el bot, compártelas.
- **Mejorar la documentación**: Siempre hay espacio para mejorar la claridad y la precisión de la documentación.
- **Escribir pruebas**: Ayuda a asegurar la calidad del código escribiendo pruebas.
- **Responder preguntas en issues**: Si tienes conocimientos sobre un tema, considera ayudar a otros.
- **Mantener traducciones**: Ayuda a que el proyecto sea accesible para más personas.

## Reportando Errores

Para reportar un error, por favor incluye la siguiente información:

1. Descripción del problema.
2. Pasos para reproducirlo.
3. Comportamiento esperado.
4. Comportamiento real.
5. Capturas de pantalla (si es posible).

Puedes reportar errores en la sección de **Issues** de nuestro repositorio en GitHub. Utiliza el siguiente formato para tu reporte:

```
## Descripción
[Descripción del error]

## Pasos para reproducir
1. [Paso 1]
2. [Paso 2]
3. [Paso 3]

## Comportamiento esperado
[Descripción del comportamiento esperado]

## Comportamiento real
[Descripción del comportamiento real]
```

## Sugerencias de Características

Si deseas sugerir una nueva característica, por favor proporciona:

1. Una descripción clara de la característica.
2. Un caso de uso que explique cómo beneficiaría a los usuarios.
3. Ejemplos de cómo podría implementarse.

Puedes utilizar el siguiente formato para tu solicitud:

```
## Descripción de la característica
[Descripción de la característica]

## Caso de uso
[Descripción del caso de uso]

## Ejemplos
[Ejemplos de implementación]
```

## Configuración del Desarrollo

Para comenzar a contribuir a ai-clinica-whatsapp-bot, sigue estos pasos:

1. **Clonar el repositorio**: Usa el siguiente comando para clonar el repositorio:
   ```
   git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
   ```

2. **Hacer un fork**: Ve a la página del repositorio en GitHub y haz clic en el botón "Fork".

3. **Instalar dependencias de desarrollo**: Navega a la carpeta del proyecto y ejecuta:
   ```
   npm install
   ```
   o, si usas Python:
   ```
   pip install -r requirements.txt
   ```

4. **Ejecutar pruebas localmente**: Para asegurarte de que todo funciona correctamente, ejecuta:
   ```
   npm test
   ```
   o, si usas Python:
   ```
   pytest
   ```

5. **Herramientas recomendadas**: Se recomienda usar Visual Studio Code o PyCharm como IDE.

## Flujo de Trabajo: Fork → Rama → PR

Sigue estos pasos para contribuir:

1. **Forkea el repositorio**: Haz clic en "Fork" en la parte superior derecha del repositorio.
2. **Clona tu fork**: Usa el comando `git clone` para clonar tu fork en tu máquina local.
3. **Crea un nombre de rama descriptivo**: Usa la convención `feature/nombre` o `fix/nombre`.
4. **Realiza cambios**: Haz las modificaciones necesarias en tu rama.
5. **Realiza commits claros**: Asegúrate de que tus mensajes de commit sean descriptivos.
6. **Empuja tus cambios**: Usa `git push` para enviar tus cambios a tu rama.
7. **Crea un Pull Request**: Ve a la página de tu fork en GitHub y haz clic en "New Pull Request".
8. **Responde a las revisiones**: Esté preparado para recibir comentarios y realizar ajustes.
9. **Fusiona**: Una vez aprobado, puedes fusionar tu PR.

## Guía de Estilo de Código

### Python

- **PEP 8**: Sigue las convenciones de estilo de PEP 8.
- **Sugerencias de tipo**: Usa anotaciones de tipo para mayor claridad.
- **Docstrings**: Documenta tus funciones y clases con docstrings.
  
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
- **Formato de Prettier**: Usa Prettier para mantener un formato consistente.
- **Convenciones de nombres**: Usa camelCase para variables y funciones.

## Pruebas

En ai-clinica-whatsapp-bot, utilizamos [nombre del framework de pruebas] para las pruebas. Para ejecutar las pruebas, usa el siguiente comando:

```
npm test
```

Asegúrate de que todas las pruebas pasen antes de enviar tu PR. Para escribir pruebas, sigue el formato de ejemplo:

```javascript
test('suma de 1 y 2', () => {
    expect(suma(1, 2)).toBe(3);
});
```

## Commits y Mensajes

Utilizamos **Conventional Commits** para mantener un historial claro. Los tipos de commits incluyen:

- `feat`: nueva característica
- `fix`: corrección de errores
- `docs`: cambios en la documentación
- `style`: cambios de formato
- `refactor`: cambios en el código que no afectan el comportamiento
- `test`: agregar pruebas
- `chore`: tareas de mantenimiento

Ejemplo de un buen mensaje de commit:
```
feat: agregar función de suma
```

## Proceso de Pull Request

Antes de enviar un Pull Request, asegúrate de que tu rama esté actualizada con la rama principal. Incluye una descripción clara de los cambios y referencia cualquier issue relacionado. Responde a los comentarios de los revisores y ten paciencia durante el proceso de revisión. Aquí hay algunos consejos para un PR exitoso:

- Mantén tu PR pequeño y enfocado.
- Asegúrate de que todas las pruebas pasen.
- Proporciona contexto suficiente en tu descripción.

## Revisión de Código

Los revisores buscarán que tu código cumpla con los criterios de aceptación establecidos. Es importante que estés abierto a recibir feedback y que realices un seguimiento de los comentarios. La revisión de código es una oportunidad para aprender y mejorar.

## Documentación

Es fundamental documentar cualquier cambio que realices. Asegúrate de actualizar la documentación en el README y en los docstrings de tu código. Aquí hay algunos ejemplos de cómo documentar:

```python
def suma(a: int, b: int) -> int:
    """Devuelve la suma de a y b."""
    return a + b
```

## Reconocimiento

Valoramos a todos nuestros contribuidores. Tu nombre será incluido en la lista de contribuidores y recibirás créditos en las notas de lanzamiento. Apreciamos cada contribución, grande o pequeña.

## Contacto y Preguntas

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos a través del correo electrónico [tu_email@example.com]. También puedes unirte a nuestra comunidad en Discord/Slack o participar en las discusiones en GitHub. Estamos aquí para ayudarte.