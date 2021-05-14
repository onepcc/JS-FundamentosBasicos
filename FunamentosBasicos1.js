// 1.- Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function arreglo(num) {
    console.log("Devuelve un arreglo del 1 al", num)
    var arreglo = [];
    for (var i = 1; i <= num; i++) {
        arreglo.push(i)
    }
    return arreglo;
}

num = 255
console.log(arreglo(num));

// 2.- Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000
// Puedes usar un operador de módulo para este ejercicio. 

function pares(x) {
    var sum = 0;
    for (var i = 0; i <= x; i += 2) {

        sum += i;

    }
    return sum;
}
console.log(pares(10));

//3.- Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
// (ej: 1+3+5+...+4997+4999).
function impares(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }

    }
    return sum;
}
console.log(impares(15));

// 4.- Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array 
// (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function sumarr(arr) {
    console.log("imprime la suma de ls valores dentro del array")
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}
console.log(sumarr([1, 2, 5]));
console.log(sumarr([-5, 2, 5, 12]));

// 5.- Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor 
// (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function print_mayor(arr) {
    console.log("Imprime mayor valor de un array")
    let mayor = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        else {
            mayor = mayor
        }
    }
    return mayor;
}
mayor = print_mayor([3, -3, 11, -9, -7, 0, 8])
console.log("El valor mayor es", mayor)

// 6.- Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores 
// (ej: para [1,3,5,7,20] el promedio es 7.2).
function print_promedio(arr) {
    console.log("Imprime el promedio de un array")
    let sum = 0;
    let promedio = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    promedio = sum / arr.length;
    return promedio;
}
promedio = print_promedio([1, 3, 5, 7, 20])
console.log("El valor promedio es", promedio)

// 7.-Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 
// (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function num_impares(x) {
    console.log("imprime un arreglo de los numeros impares hasta", x)
    var arr = []
    for (var i = 0; i <= x; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }

    }
    return arr;
}

console.log(num_impares(50));

// 8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
// Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function mayor_que(arr, y) {
    console.log("imprime cuantos numero mayor a", y)
    mayores = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            mayores += 1
        }

    }
    return mayores;
}

console.log(mayor_que([1, 3, 5, 7], 3));

// 9.- Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor 
// (ej: [1,5,10,-2] será [1,25,100,4]).
function cuadrados(arr) {
    console.log("imprime un array de los cuadrados")
    
    for (var i = 0; i < arr.length; i++) {
        arr[i]*=arr[i]
        }
    return arr;
}

console.log(cuadrados([1, 5, 10,-2]));

