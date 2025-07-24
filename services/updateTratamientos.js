const fs = require('fs');
const path = require('path');
const axios = require('axios');

const urlsPath = path.join(__dirname, '../data/tratamientos_urls.json');
const outputPath = path.join(__dirname, '../data/tratamientos.json');

async function fetchTratamiento(url) {
  try {
    const { data } = await axios.get(url);

    // Extraer nombre del tratamiento desde <h2 class="elementor-heading-title">
    const nombreMatch = data.match(/<h2[^>]*class=["']elementor-heading-title["'][^>]*>(.*?)<\/h2>/i);
    let nombre = nombreMatch ? nombreMatch[1].replace(/<[^>]+>/g, '').trim() : '';

    // Fallback: si no se encuentra, usar <title>
    if (!nombre) {
      const titleMatch = data.match(/<title>(.*?)<\/title>/i);
      nombre = titleMatch ? titleMatch[1].replace(/\s*-\s*Clínica Aroma.*$/i, '').trim() : url;
    }

    // Extraer descripción: buscar meta, luego varios <p> y posibles bloques <section> o <div>
    const descMatch = data.match(/<meta name="description" content="([^"]+)"/i);
    let descripcion = descMatch ? descMatch[1] : '';

    if (!descripcion) {
      // Buscar todos los <p> relevantes
      const pMatches = [...data.matchAll(/<p>(.*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      // Filtrar párrafos vacíos y unir los más largos
      const pFiltrados = pMatches.filter(p => p.length > 40);
      descripcion = pFiltrados.join(' ');
    }

    // Si sigue sin descripción, buscar bloques <section> o <div> con texto
    if (!descripcion || descripcion.length < 40) {
      const sectionMatch = data.match(/<section[^>]*>([\s\S]*?)<\/section>/i);
      if (sectionMatch) {
        // Extraer texto plano del bloque
        const textoPlano = sectionMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        if (textoPlano.length > 40) descripcion = textoPlano;
      }
    }

    // Limitar longitud máxima para evitar respuestas demasiado largas
    if (descripcion.length > 600) {
      descripcion = descripcion.slice(0, 600) + '...';
    }

    return { nombre, descripcion };
  } catch (e) {
    console.error('Error al obtener', url, e.message);
    return null;
  }
}

async function main() {
  const urls = JSON.parse(fs.readFileSync(urlsPath, 'utf8'));
  const resultados = [];
  for (const url of urls) {
    const t = await fetchTratamiento(url);
    if (t) resultados.push(t);
  }
  fs.writeFileSync(outputPath, JSON.stringify(resultados, null, 2), 'utf8');
  console.log('tratamientos.json actualizado con', resultados.length, 'tratamientos.');
}

if (require.main === module) {
  main();
}
