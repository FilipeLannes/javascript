function converter() {
    var num = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
    var n1 = Number(num)
    var neg = document.getElementById('neg')
    neg.innerHTML = `A temperatura de ${n1.toLocaleString('pt-BR')} °C, corresponde a...`
    neg.style.fontSize = '1.8em'
    neg.style.fontWeight = '700'

    var k = Number(n1 + 273,15)
    var fa = Number((9 / 5 * n1) + 32)

    var res = document.getElementById('res')
    res.innerHTML = `
        <p>${k.toLocaleString('pt-BR')} °K (Kelvin)</p>
        <p>${fa.toLocaleString('pt-BR')} °F (Fahrenheit)</p>
    `
}