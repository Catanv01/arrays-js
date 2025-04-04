const numero = Math.floor(Math.random() * 10) + 1;
let numero_sugerido = prompt("Ingrese un número entre 1 y 10")

while (numero_sugerido != numero){
    if (numero_sugerido > numero){
        alert("Numero sugerido es mayor al numero generado") 
    }
    if (numero_sugerido < numero){
        alert("Numero sugerido es menor al numero generado")
    }

    numero_sugerido = prompt("Ingrese un número entre 1 y 10")
}
alert("¡Adivinaste el número!") 