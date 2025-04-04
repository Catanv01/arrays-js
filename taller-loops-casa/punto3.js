const frase = prompt("Ingrese una frase").toLowerCase()
let indice = 0
let cantidad_vocales = 0

while(indice <= frase.length -1){

    if ( frase.charAt(indice) === "a" ){
        cantidad_vocales = cantidad_vocales + 1

    } else if ( frase.charAt(indice) === "e" ){
        cantidad_vocales = cantidad_vocales + 1

    } else if ( frase.charAt(indice) === "i" ){
        cantidad_vocales = cantidad_vocales + 1

    } else if ( frase.charAt(indice) === "o" ){
        cantidad_vocales = cantidad_vocales + 1

    } else if ( frase.charAt(indice) === "u" ){
        cantidad_vocales = cantidad_vocales + 1

    }

    indice = indice + 1
}
alert("El resultado es: " + cantidad_vocales)