function clique() {
    var produto = window.prompt('Qual produto você está comprando?')
    var preço = Number(window.prompt(`Qual é o preço de ${produto}?`))
    var neg = document.getElementById('mudar')
    var res = document.getElementById('res')
    var desconto = preço / 10
    var vf = preço - desconto

    neg.innerHTML = `Calculando desconto de 10% para ${produto}`
    neg.style.fontSize = '1.8em'
    neg.style.fontWeight = '700'

    res.innerHTML = `
        <p>O preço original era R$ ${preço.toLocaleString('pt-BR')}.</p>
        <p>Você acaba de ganhar R$ ${desconto.toLocaleString('pt-BR')} de desconto (-10%).</p>
        <p>No fim, você vai pagar R$ ${vf.toLocaleString('pt-BR')} no produto ${produto}.</p>
    `
}