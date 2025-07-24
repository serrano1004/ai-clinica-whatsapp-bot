const fs = require('fs');
const path = require('path');

const ofertasPath = path.resolve(__dirname, '../data/ofertas.json');

function loadJson(fileName) {
  const filePath = path.resolve(__dirname, '../data/', fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function obtenerTratamientos() {
  return loadJson('tratamientos.json');
}

function obtenerOfertas() {
  return loadJson('ofertas.json');
}

function actualizarOfertasDesdeTexto(texto) {
  const nuevasOfertas = texto.split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .map(line => {
      const [titulo, ...resto] = line.split(':');
      return { titulo: titulo.trim(), detalle: resto.join(':').trim() };
    });

  fs.writeFileSync(ofertasPath, JSON.stringify(nuevasOfertas, null, 2), 'utf8');
  console.log('✅ Ofertas actualizadas desde el canal.');
}

module.exports = {
  obtenerTratamientos,
  obtenerOfertas,
  actualizarOfertasDesdeTexto
};
