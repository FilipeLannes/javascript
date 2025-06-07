function converter() {
    var num = Number(window.prompt('Digite uma distância em metros (m)'))
    var n1 = Number(num)
    var neg = document.getElementById('neg')
    neg.innerHTML = `A distância de ${n1.toLocaleString('pt-BR')} metros, corresponde a...`
    neg.style.fontSize = '1.8em'
    neg.style.fontWeight = '700'

    var km = n1 / 1000
    var hm = n1 / 100
    var dam = n1 / 10
    var dm = n1 * 10
    var cm = n1 * 100
    var mm = n1 * 1000

    var res = document.getElementById('res')
    res.innerHTML = `
        <p>${km.toLocaleString('pt-BR')} quilômetros (Km)</p>
        <p>${hm.toLocaleString('pt-BR')} hectômetros (Hm)</p>
        <p>${dam.toLocaleString('pt-BR')} decâmetros (Dam)</p>
        <p>${dm.toLocaleString('pt-BR')} decímetros (dm)</p>
        <p>${cm.toLocaleString('pt-BR')} centímetros (cm)</p>
        <p>${mm.toLocaleString('pt-BR')} milímetros (mm)</p>
    `
}