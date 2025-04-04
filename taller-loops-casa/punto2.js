const numero = prompt("Ingrese un número positivo")+""
let indice = 0
let suma = 0

while(indice <= numero.length -1){
    suma = suma + parseInt(numero.charAt(indice))
    indice = indice + 1
}
alert("El resultado es: " + suma)