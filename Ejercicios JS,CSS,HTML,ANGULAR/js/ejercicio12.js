var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function(){
        var saludo_fn = function(){
            console.log("hola " + this.obj.nombre);

        };
        saludo_fn();
    }
    };
obj.saludo();
