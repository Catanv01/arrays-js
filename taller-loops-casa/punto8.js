let numero = prompt("Ingrese un número positivo")
let factorial = 1

if (numero < 0){
    alert("No se puede calcular el factorial de un número negativo")

} else{
    for (let i= numero; i > 1; i = i-1){
        factorial = factorial * i
    }
    
    alert("El resultado factorial del número ingresado es: " + factorial)
}
