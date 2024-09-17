
let style = document.createElement('style');
style.innerHTML = `
    .parrafo {
        color: red;
        text-decoration: underline;
        font-size: 2em;
    }
    .aplicado {
        background-color: yellow;
    }
`;

document.head.appendChild(style);


let p = document.createElement('p');
    p.id = 'p1';
    p.textContent = 'Párrafo1';
    document.body.appendChild(p);


let button = document.createElement('button');
    button.id = 'boton1';
    button.textContent = 'Aplicar estilo a párrafo';
    p.appendChild(button);


button.onclick = function() {
    if (!p.classList.contains('parrafo')) {
            p.classList.add('parrafo');
            button.textContent = 'Quitar estilo a párrafo';
            button.classList.add('aplicado');
    } else {
            p.classList.remove('parrafo');
            button.textContent = 'Aplicar estilo a párrafo';
            button.classList.remove('aplicado');
            }
        };
