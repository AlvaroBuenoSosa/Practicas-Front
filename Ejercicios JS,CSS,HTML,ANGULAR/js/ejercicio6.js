//A

let array1 = [3,4,5,6]

//b
for (let num of array1) {
    switch (num) {
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

for (let num in array1) {
    switch (array1[num]) {
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

var a = "Er";
a += "ic";
var b = a > "Jhon Lennon" || a + " Clapton";
a=b;
var c = !(a > b || a != b) && a != "Eric";

console.log(a)
console.log(b)
console.log(c)


//C

array1.push(3);
console.log("Array después de agregar el 3:", array1);

//D

array1.splice(-3);
console.log("Array después de quitar los 3 últimos elementos:", array1);