function clique() {
    var valorA = Number(window.prompt('Qual é o valor de a?'))
    var valorB = Number(window.prompt('Qual é o valor de b?'))
    var valorC = Number(window.prompt('Qual é o valor de c?'))
    var vf = Number(valorB * valorB - 4 * valorA * valorC)

    var neg = document.getElementById('neg')
    neg.innerHTML = `Resolvendo Bhaskara`
    neg.style.fontSize = '1.8em'
    neg.style.fontWeight = '700'

    var res = document.getElementById('res')
    res.innerHTML = `
        <p>A equação atual é <strong>${valorA}x<sup>2</sup> + ${valorB}x + ${valorC} = 0</strong></p>
        <p>O cálculo realizado será <strong>&Delta; = ${valorB}<sup>2</sup> - 4 . ${valorA} . ${valorC}</strong></p>
        <p>O valor calculado foi <strong>&Delta; = ${vf}</strong></p>
    `
}