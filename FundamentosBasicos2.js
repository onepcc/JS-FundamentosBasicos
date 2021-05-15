
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
    largo_1 = array[array.length - 2];
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

// 4.- Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
// Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(array) {
    console.log("Imprime un array nuevo con el doble del primero")
    let nuevo = [];
    for (var i = 0; i < array.length; i++) {
        nuevo[i] = 2 * array[i]
    }
    return nuevo;

}
let dato = [4, -2, 12, -7, 3, 18, 8];
salida = doble(dato);
console.log("El doble del array es:  ", salida)
console.log("El array es:  ", dato)

// 5.- Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. 
// Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function positivos(array) {
    console.log("Imprime un array nuevo donde el ultimo valor es el numero de valores positivos")
    let num = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            num += 1;
        }
    }
    array[array.length - 1] = num;
    return array;

}
let dato = [4, -2, 12, -7, 3, 18, 8];
console.log("El array es:  ", dato)
salida = positivos(dato);
console.log("El array nuevo es:  ", salida)

// 6.- Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, 
// y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function parimpar(arr) {
    console.log("Imprime algo si hay 3 valores seguidos par o impar")

    for (var i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("es para bien");
        }

        else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {

            console.log("Que imparcial")
        }
    }

    return arr;

}
let dato = [2, 2, 6, 4, 3, 1, 5, 7];
console.log("El array es:  ", dato)
parimpar(dato);

// 7.- Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar 
// (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr.

function sum1impar(arr) {
    console.log("Incrementa los impares")
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newarr[i] = arr[i];
        }
        else {
            newarr[i] = arr[i] + 1;
        }
    }
    return newarr;
}

let dato = [2, 2, 6, 4, 3, 1, 5, 7];
console.log("El array es:  ", dato)
console.log(sum1impar(dato))

// 8.- Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
// Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function longprevias(arr) {
    console.log("Remplaza string por numero de caracteres del anterior")
    let newarr = [];
    for (var i = arr.length - 1; i > 0; i--) {
        newarr[i] = arr[i - 1].length
    }
    newarr[0] = arr[0];
    return newarr;
}

let dato = ["programar", "dojo", "Genial"];
console.log("El array es:  ", dato)
console.log(longprevias(dato))


// 9.- Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. 
// Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
let dato = [1, 2, 3];
function agrega7(arr) {
    console.log("Suma 7 a cada elemento del array orignal")
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] + 7
    }
    return newarr;
}


console.log("El array original es:  ", dato)
let nuevo = agrega7(dato)
console.log(nuevo)


// 10.- Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
// Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
let dato = [3, 1, 6, 4, 2];
function inversos(arr) {
    console.log("Devuleve el mismo array invertido")
    // arr.reverse()
    // let nuevo =[]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[arr.length - (i + 1)];

    }
    return arr;
}
console.log("El array original es:  ", dato)
let nuevo = inversos(dato)
console.log(nuevo)

// 11.- Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). 
// Dado [1,-3,5], devuelve [-1,-3,-5].
let dato = [3, -1, -6, 4, 2];
function typeonegative(arr) {
    console.log("Devuelve nuevo array con todos los valores negativos")
    let nuevo = [];
    for (let i = 0; i < arr.length; i++) {
        nuevo[i] = Math.abs(arr[i]) * -1;
        // if (arr[i]>0){
        //     nuevo[i]=arr[i]*-1;
        // }
        // else{
        //     nuevo[i]=arr[i];
        // }        
    }
    return nuevo;
}
console.log("El array original es:  ", dato)
let nuevo = typeonegative(dato)
console.log(nuevo)


// 12.- Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. 
// Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function hungry(arr) {
    console.log("Si hay un 'comida' imprime 'yummy', si no existe imprime 'tengo hambre'")
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "comida") {
            console.log("yummy");
        }
    }
    if (arr.indexOf("comida") == -1) {
        console.log("Tengo Hambre");
    }

}

let prueba = ["programar", "comida", "Genial", "comida", "Juegos"];
let prueba2 = [1, 2, 3, 4, 5];
console.log("El array es:  ", prueba);
console.log("El array es:  ", prueba2);
hungry(prueba)
hungry(prueba2)


// 13.- Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
// Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function cambiaHaciaElCentro(arr) {
    console.log("Intercambia centrado indices pares")
    // arr.reverse()
    // let nuevo =[]
    let temp = 0
    for (let i = 0; i < arr.length; i = i + 3) {
        temp = arr[i]
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp
    }
}
let dato = [1, 2, 3, 4, 5, 6];
console.log("El array original es:  ", dato)
cambiaHaciaElCentro(dato)
console.log(dato)

// 14.- Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. 
// Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function escala(arr, num) {
    if (isNaN(num)) {
        console.log("Debe introducir un array y un numero")
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = num * arr[i];
    }
    console.log("imprime array * num")
    return arr;
}
let dato = [1, 2, 3, 4, 5, 6];
console.log("El array original es:  ", dato)
escala(dato, 2)
console.log(dato)