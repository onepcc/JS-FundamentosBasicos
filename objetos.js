
var users = [{ name: "Michael", age: 37 }, { name: "Angel", age: 30 }, { name: "David", age: 27 }];
users.push({ name: "Isabella", age: 7 })


// ¿Cómo harías print/log de la edad de John?
console.log("La edad de John es: ", users[1].age)


// ¿Cómo harías print/log del nombre del primer objeto?
console.log("El nombre en primer objeto es: ", users[0].name)

// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
console.log("Nombre y edad: ")
for (let obj of users) {
    console.log(obj.name + " - " + obj.age)
}

// ¿Cómo harías para imprimir el nombre de los mayores de edad?
console.log("imprime los mayores de edad: ")
for (let obj of users) {
    if (obj.age > 18) {
        console.log(" - " + obj.name + " - ")
    }
}

