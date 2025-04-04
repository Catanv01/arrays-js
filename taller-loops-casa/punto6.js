let numero = prompt("Digite numero positivo")
let cantidad_numero = 0

if(numero < 0){
    alert("La cantidad de números positivos ingresados es: 0")
}else{
    do{
        cantidad_numero = cantidad_numero + 1
        numero = prompt("Digite numero positivo")
    
    
    } while (numero > 0)
    
    alert("La cantidad de números positivos ingresados es: " + cantidad_numero)
}
