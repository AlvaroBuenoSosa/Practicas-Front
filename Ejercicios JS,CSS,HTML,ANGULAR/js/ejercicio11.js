let funciones = {
    colorVerde: function() {
      console.log("VERDE");
    }
};
  
funciones.colorVerde();

funciones.colorRojo = function() {
    console.log("ROJO");
    this.colorVerde();
};

funciones.colorRojo();
