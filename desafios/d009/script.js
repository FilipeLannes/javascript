function clique () {
    var res = document.getElementById('res')
    var neg = document.getElementById('neg')
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salário = Number(window.prompt(`Qual é o salário de ${nome}`))
    var porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var p1 = Number((salário * porcentagem) / 100)
    var vf = Number(salário + p1)

    neg.innerHTML = `${nome} recebeu um aumento salarial!`
    neg.style.fontSize = '1.8em'
    neg.style.fontWeight = '700'

    res.innerHTML = `
        <p>O salário atual era R$ ${salário.toLocaleString('pt-BR')}.</p>
        <p>Com o aumento de ${porcentagem}%, o salário vai aumentar R$ ${p1.toLocaleString('pt-BR')} no próximo mês.</p>
        <p>E a partir daí, ${nome} vai passar a ganhar R$ ${vf.toLocaleString('pt-BR')}.</p>
    `
}