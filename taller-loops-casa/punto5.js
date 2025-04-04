const numero = Math.floor(Math.random() * 50) + 1;
let numero_sugerido = prompt("Ingrese un número entre 1 y 50")

do{
    if (numero_sugerido > numero){
        alert("Numero sugerido es alto al numero generado") 
    }
    if (numero_sugerido < numero){
        alert("Numero sugerido es bajo al numero generado")
    }

    numero_sugerido = prompt("Ingrese un número entre 1 y 50")

} while (numero_sugerido != numero)

alert("¡Adivinaste el número!") 

