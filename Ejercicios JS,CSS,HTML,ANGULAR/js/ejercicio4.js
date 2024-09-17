let cadena1 = "CADENA1";

console.log(cadena1);

let cadena2;

console.log(cadena2);

console.log(typeof cadena1);

console.log(typeof cadena2);

if (typeof cadena2 === 'undefined') {
    console.log("SIN DEFINIR");
}

let cliente =   {nombre : "pepito", tel:"656666666"}

cliente.direccion = "C/ Salud,21";

for (let propiedad in cliente) {
    console.log(`${propiedad}: ${cliente[propiedad]}`);
}

