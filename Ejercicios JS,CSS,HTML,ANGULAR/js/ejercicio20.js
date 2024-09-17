let nuevoParrafo = document.createElement('p');

let textoFuerte = document.createElement('strong');
textoFuerte.textContent = "Este texto está añadido dinámicamente";

nuevoParrafo.appendChild(textoFuerte);

document.body.appendChild(nuevoParrafo);

console.log('Elemento <p> añadido:', nuevoParrafo);
