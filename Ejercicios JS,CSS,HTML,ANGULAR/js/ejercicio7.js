let pieza1 = {peso:20};
let pieza2 = {peso:'20'};

let piezas = pieza1.peso == pieza2.peso;

console.log(piezas);

let piezas1= pieza1.peso === pieza2.peso;

console.log(piezas1);

let sumaPiezas = pieza1.peso === '20' ? pieza1.peso + pieza2.peso : pieza1.peso * pieza2.peso;

console.log("La suma o multiplicación de los pesos es:", sumaPiezas);