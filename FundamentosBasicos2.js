
// 1. - Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”.
// Ejemplo: grande([-1, 3, 5, -5]) devuelve[-1, “big”, “big”, -5].

function grande(array) {
    console.log("Cambia los numeros + por 'big'")
    var arreglo = [];
    for (val in array) {
        if (array[val] > 0) {
            array[val] = "big";
            arreglo[val] = array[i];
        }
        else {
            array[val] = array[val]
        }
    }
    arreglo = array
    return arreglo;

}
console.log(grande([-1, 3, 5, -5]));

function grande(array) {
    console.log("Cambia los numeros + por 'big'")
    var arreglo = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = "big";
            arreglo[i] = array[i];
        }
        else {
            array[i] = array[i]
        }
    }
    arreglo = array
    return arreglo;
}
console.log(grande([-1, 3, 5, -5]));

// 2.- Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
// La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function p_menor_r_mayor(array) {
    console.log("Imprime el menor, retorna el mayor")
    let mayor = array[0];
    let menor = array[0];

    for (var i = 0; i < array.length; i++) {

        if (array[i] > mayor) {
            mayor = array[i];

        }

        else if (array[i] < menor) {
            menor = array[i];
        }
        else {
            mayor = mayor
            menor = menor
        }
    }
    console.log("El menor valor es ", menor)
    return mayor;
}
mayor = p_menor_r_mayor([3, -3, 11, -9, -7, 0, 8])
console.log("El valor retornado es", mayor)

// 3.- Imprime (print) uno, devuelve (return) otro- 
// Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function p_uno_r_otro(array) {
    console.log("Imprime el penultimo valor, retorna primer valor impar")
    largo_1 = array[array.length-2];
    let p_impar = array[0];
    console.log("El penultimo valor es ", largo_1)
    for (var i = 0; i < array.length; i++) {
        
        
        if (array[i] % 2 !== 0) {
            p_impar = array[i];
            return p_impar;
        }
        
    }
    
}
salida = p_uno_r_otro([4, -2, 12, -7, 3, 18, 8])
console.log("El valor primer impar es ", salida)

