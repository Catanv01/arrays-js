/*
for (let i=0, i<10, i++){
    console.log("Iteración for número", i)
}

console.log(i)


//Actividad 3 

let numeros = [1, 2, 3, 4, 5, 6, 7,8, 9]

for(let i=0; i < 9; i++){

    console.log("Tabla de multiplicar del numero", numeros[i])
    console.log(numeros[i] * 1)
    console.log(numeros[i] * 2)
    console.log(numeros[i] * 3)
    console.log(numeros[i] * 4)
    console.log(numeros[i] * 5)
    console.log(numeros[i] * 6)
    console.log(numeros[i] * 7)
    console.log(numeros[i] * 8)
    console.log(numeros[i] * 9)
}

let numeros = [1, 2, 3, 4, 5, 6, 7,8, 9]

for(let i=0; i < 9; i++){

    console.log("Tabla de multiplicar del numero: ", numeros[i])
    for(let k=0; k < 9; k++){
        console.log(numeros[i] * numeros[k])
    }

}


// Punto 4

let totalnota = 0
let nota

for (let i = 0; i < 5; i++){
    let nota = parseInt(prompt("Ingrese la nota "+ i))
    totalnota += nota
}
let promedio = totalnota
console.log("El promedio es: " + promedio)



//Punto 11 

let numero = parseInt(prompt("Ingresa el numero: "))
let fibonacci = [0,1]
for (let i = 2; i < numero; i++){
    fibonacci[i-1] + fibonacci[i-2]

}
console.log("Los primeros numeros de: "+ numero +"son:" + fibonacci.slice(0, numero))

*/

let nombres = ["Carlos", "Pepe", "Ana", "Luisa"]

for(const nombre of nombres){
    console.log("Nombres " + nombre)
}
console.log("Estoy fuera!")