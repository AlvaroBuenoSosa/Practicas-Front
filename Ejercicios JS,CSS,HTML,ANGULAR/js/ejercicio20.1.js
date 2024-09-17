
    let Parrafo = document.createElement('p');
    
    let textoStrong = document.createElement('strong');

    textoStrong.textContent = "Este texto está añadido dinámicamente";
    
    Parrafo.appendChild(textoStrong);

    document.body.appendChild(Parrafo);
    
    Parrafo.setAttribute('id', 'parrafo1');

    console.log('Elemento <p> añadido:', Parrafo);
