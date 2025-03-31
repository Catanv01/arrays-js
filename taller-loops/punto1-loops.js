//Punto1 ---------- While
/*
let numero = 1

while (numero <= 100){
    console.log("Iteración while numero", numero)
    numero += 1
}

//Do while

let numero = 1

do{
    console.log("Iteración while numero", numero)
    numero++
} while(numero<=100)


//Punto 2 --------- While

let contador = 10

while(contador != 1){
    contador-=1

    if (contador == 1){
        console.log("Terminé")
    }
}


// Do while

let contador = 10

do {
    contador-=1
    console.log(contador)

    if (contador == 1){
        console.log("Terminé")
    }
} while(contador != 1)


//Punto 8 ------------ while


let sumaEdades = 0
let cantidadEdades = 0

let numnegativo = false

while (numnegativo != true){
    edadUsuario = parseInt(prompt("Ingrese la edad de sus amigos y en caso de que quiera terminar ingrese un numero negativo"))

    if (edadUsuario < 0){
        numnegativo = true
    }
    sumaEdades += edadUsuario
    cantidadEdades += 1
}

console.log(sumaEdades/cantidadEdades)



// Punto 9 ----------- while

let digitos = prompt("Ingrese un numero que desee contar los digitos")

let listaDigitos = digitos.split("")

console.log(listaDigitos)

let contador = 0

while (contador != listaDigitos.length){
    contador += 1
}
console.log("Digitos", contador)
*/

// Punto 10 -------- Do while

do {
    let monto = prompt("Ingrese el monto de la moneda")

    console.log("El monto")
}