var valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

//console.log(valores[0])

/* Codigo simples
for(var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}