let numeros= [1, 2, 3, 45, 0, 22, 7]


let numerosPares = numeros.filter(numero => numero % 2 === 0)

console.log("ORIGINAL: " + numeros)
console.log("LISTA NUMEROS PARES: " + numerosPares)


let notas = [{name: "Ricardo", note: 2}, {name: "Catalina", note: 4}, {name: "Camilo", note: 1}]

let reprobados = notas.filter(caso => caso.note < 3)

console.log(reprobados)