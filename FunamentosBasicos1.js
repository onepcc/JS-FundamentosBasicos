// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function arreglo(num) {
    console.log("Devuelve un arreglo del 1 al", num)
    var arreglo = [];
    for (var i = 1; i <= num; i++) {
        arreglo.push(i)
        }
        return arreglo;
    }
    
num=255
console.log(arreglo(num));

// 2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000
// Puedes usar un operador de módulo para este ejercicio. 

function pares(x){
    var sum = 0;
    for(var i = 0; i <=x; i+2){
        sum= sum + i;
    }
    return sum;
}
console.log(pares(4));
