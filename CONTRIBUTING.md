# Contribuyendo a ai-clinica-whatsapp-bot

¡Bienvenido a la guía de contribución de ai-clinica-whatsapp-bot! Agradecemos tu interés en contribuir a este proyecto. Aquí, valoramos cada aporte, ya sea reportando errores, sugiriendo nuevas características o mejorando la documentación. Tu participación es fundamental para el crecimiento y mejora de ai-clinica-whatsapp-bot. ¡Esperamos verte pronto en nuestra comunidad!

## Código de Conducta

En ai-clinica-whatsapp-bot, nos comprometemos a crear un entorno acogedor y respetuoso para todos. Valoramos la diversidad y la inclusión, y esperamos que todos los colaboradores se traten con respeto. No toleramos el acoso de ningún tipo. Si experimentas o presencias comportamientos inapropiados, por favor, repórtalo a los mantenedores del proyecto. Juntos, podemos mantener un espacio seguro y colaborativo.

## Formas de Contribuir

Existen varias maneras en las que puedes contribuir a ai-clinica-whatsapp-bot:

- **Reportar errores**: Si encuentras un error, no dudes en informarlo.
- **Sugerir características**: Comparte tus ideas para nuevas funcionalidades.
- **Mejorar la documentación**: Ayúdanos a mantener la documentación clara y actualizada.
- **Escribir pruebas**: Contribuye con pruebas para asegurar la calidad del código.
- **Responder preguntas en issues**: Ayuda a otros miembros de la comunidad.
- **Mantener traducciones**: Colabora en la traducción de la aplicación a otros idiomas.

## Reportando Errores

Para reportar un error, por favor incluye la siguiente información:

1. Descripción clara del problema.
2. Pasos para reproducir el error.
3. Comportamiento esperado.
4. Comportamiento observado.
5. Capturas de pantalla o registros de error, si es posible.

Puedes reportar errores abriendo un nuevo issue en nuestro repositorio: [Issues de ai-clinica-whatsapp-bot](https://github.com/serrano1004/ai-clinica-whatsapp-bot/issues).

## Sugerir Características

Si deseas sugerir una nueva característica, por favor describe:

1. La funcionalidad que te gustaría ver.
2. Un caso de uso o escenario en el que sería útil.
3. Ejemplos de cómo podría implementarse.

Puedes utilizar el siguiente formato para tu solicitud de característica:

```
### Sugerencia de Característica

**Descripción**: [Descripción de la característica]

**Caso de uso**: [Descripción del caso de uso]

**Ejemplo**: [Ejemplo de cómo podría funcionar]
```

## Configuración del Entorno de Desarrollo

Para comenzar a contribuir a ai-clinica-whatsapp-bot, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/serrano1004/ai-clinica-whatsapp-bot.git
   cd ai-clinica-whatsapp-bot
   ```

2. **Haz un fork del repositorio** en GitHub.

3. **Instala las dependencias de desarrollo**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Ejecuta pruebas localmente**:
   ```bash
   pytest
   ```

5. **Herramientas recomendadas**: Utiliza un IDE como Visual Studio Code o PyCharm para facilitar el desarrollo.

6. **Configuración del IDE**: Asegúrate de que tu IDE esté configurado para seguir las pautas de estilo de código que se describen más adelante.

## Flujo de Trabajo: Fork → Rama → PR

Sigue estos pasos para contribuir:

1. **Forkea el repositorio** en GitHub.
2. **Clona tu fork**:
   ```bash
   git clone https://github.com/tu_usuario/ai-clinica-whatsapp-bot.git
   ```
3. **Crea una rama descriptiva**:
   - Convención: `feature/nombre` o `fix/nombre`
4. **Realiza tus cambios** en la nueva rama.
5. **Haz commits claros** y descriptivos.
6. **Empuja tus cambios** a tu rama:
   ```bash
   git push origin nombre_de_tu_rama
   ```
7. **Crea un Pull Request** en el repositorio original.
8. **Responde a las revisiones** y comentarios.
9. **Fusiona** tu PR una vez aprobado.

## Guía de Estilo de Código

### Python

- **PEP 8**: Sigue las convenciones de estilo de Python.
- **Hints de tipo**: Utiliza hints de tipo para mejorar la legibilidad.
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

- **Configuración de ESLint**: Asegúrate de seguir las reglas definidas.
- **Formato Prettier**: Usa Prettier para mantener un formato consistente.
- **Convenciones de nombres**: Utiliza nombres descriptivos para variables y funciones.

## Pruebas

Utilizamos **pytest** como nuestro marco de pruebas. Para ejecutar las pruebas, simplemente corre:
```bash
pytest
```

Asegúrate de que todas las pruebas pasen antes de enviar un PR. Para escribir pruebas, sigue el formato de prueba de pytest y asegúrate de cubrir los casos más relevantes.

Ejemplo de prueba:
```python
def test_suma():
    assert suma(1, 2) == 3
```

## Commits y Mensajes

Adoptamos el estándar de **Commits Convencionales**. Los tipos de commits incluyen:

- `feat`: Nueva característica
- `fix`: Corrección de errores
- `docs`: Cambios en la documentación
- `style`: Cambios de formato
- `refactor`: Cambios en el código que no corrigen errores ni añaden características
- `test`: Añadir pruebas
- `chore`: Cambios en la construcción del proyecto

Ejemplo de buen mensaje:
```
feat: añadir función de suma
```

## Proceso de Pull Request

Antes de enviar un PR, asegúrate de:

1. Estar actualizado con la rama principal.
2. Incluir una descripción clara de los cambios.
3. Referenciar cualquier issue relacionado.
4. Responder a los comentarios y sugerencias.
5. Ser paciente durante el proceso de revisión.

## Revisión de Código

Los revisores buscarán:

- Criterios de aceptación cumplidos.
- Calidad del código.
- Cobertura de pruebas adecuada.
- Documentación actualizada.

Recuerda que la revisión de código es una oportunidad para aprender y mejorar.

## Documentación

Es importante documentar cualquier cambio que realices. Asegúrate de:

- Actualizar los docstrings.
- Modificar el README si es necesario.
- Proporcionar ejemplos claros en la documentación.

## Reconocimiento

Valoramos a nuestros contribuidores. Todos los que contribuyan recibirán reconocimiento en la sección de créditos de las notas de la versión. También mantenemos una lista de contribuidores en el repositorio.

## Contacto y Preguntas

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos:

- **Email**: [tu_email@ejemplo.com](mailto:tu_email@ejemplo.com)
- **Comunidad en Discord/Slack**: [Enlace a la comunidad]
- **Discusiones en GitHub**: [Discusiones de ai-clinica-whatsapp-bot](https://github.com/serrano1004/ai-clinica-whatsapp-bot/discussions)

¡Gracias por tu interés en contribuir a ai-clinica-whatsapp-bot! Tu participación es muy valiosa para nosotros.