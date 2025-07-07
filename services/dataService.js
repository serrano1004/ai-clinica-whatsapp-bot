const fs = require('fs');
const path = require('path');

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

module.exports = { obtenerTratamientos, obtenerOfertas };
