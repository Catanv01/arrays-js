let colores = [
     "Azul", "Rosado", "Verde", "Rojo","Verde", "Amarillo", "Blanco"]



let nuevoColor = prompt("Inserte un nuevo color")

/*
colores.push(nuevoColor)

console.log(nuevoColor)

while(nuevoColor != "Marron") {
    nuevoColor = prompt("Inserte un nuevo color")
    colores.push(nuevoColor)
    console.log(nuevoColor)
}
*/

console.log("Implementacion WHILE")

let contador = 0
while(true){

    if(colores[contador] === "Verde"){
        contador++
        continue
    }

    console.log("Permitido " + colores[contador])
    
    

    if(colores[contador] === "Amarillo"){
        break
    }
    contador++
}

console.log("Implementacion DO-WHILE")

/*
contador = 0
console.log("Permitido " + colores[contador])
do{
    contador++
    console.log("Permitido " + colores[contador])
    
}while(colores[contador] != "Amarillo")

*/


const marcas = ["Toyota" , "Suzuki" , "Kia" , "Nisan"]

const cantidadElementos = marcas.length

console.log(cantidadElementos)

for(let i=0; i < cantidadElementos; i=i+1){
    console.log(marcas[i])
}


const heroes = [{name: "Hercules", city: "Athenas", age: 50} , {"value": 30} , {name: "Thor", city:"Asgard"}, 
    {name:"Marvel", city: "New York"}]



for(const hero of heroes){
    console.log(hero)
    for(const property in hero){
        console.log("My "+ property + " is " + hero[property])
    }
}

const heroChosen = {name: "Hercules", city: "Athenas", age: 50}

for(const property in heroChosen){
    console.log("My "+ property + " is " + heroChosen[property])
}



