var objetoPadre={
    edad:null,
    nombre:null,
    apellidos:null,
    muestraDatos:function(){
      console.log(this.nombre+' '+this.apellidos+' tiene una edad de '+this.edad);
    }
  };
/* Creamos hijo1 a partir de objetoPadre */
var hijo1=Object.create(objetoPadre);
hijo1.edad=21;
hijo1.nombre='Antonio';
hijo1.apellidos='Martinez Garcia';
/* Creamos hijo2 a partir de objetoPadre */
var hijo2=Object.create(objetoPadre);
hijo2.edad=30;
hijo2.nombre='Pepe';
hijo2.apellidos='Martinez Garcia';
hijo1.muestraDatos();
hijo2.muestraDatos();
/*hijo1.verEdad(); hijo2.verEdad();*/
/* Creamos una función nueva del Objeto Padre que será heredada por hijo1 e hijo2 a través del prototype */
objetoPadre['verEdad']=function(){
  console.log(this.edad);
}
hijo1.verEdad();
hijo2.verEdad();
