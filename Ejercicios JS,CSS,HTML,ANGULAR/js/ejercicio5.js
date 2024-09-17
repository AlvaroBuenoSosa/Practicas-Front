//A

let array1 = [1,2,3,4]

//b
for (var i = 0; i < array1.length; i++) {
    switch (array1[i]) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
        default:
            console.log("Número no reconocido");
    }
}

//C

array1.push(3);
console.log("Array después de agregar el 3:", array1);

//D

array1.splice(-3);
console.log("Array después de quitar los 3 últimos elementos:", array1);