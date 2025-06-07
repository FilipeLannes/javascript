var num = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {
    var n1 = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var vf = Number.parseInt(n1 / num)
    var res = document.getElementById('res')

    res.innerHTML = `Você tem ${vf} US$.`
}