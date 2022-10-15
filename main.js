const fmr = document.getElementById('formulario')
const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const corpoTabela = document.querySelector('tbody')
const avisos = document.getElementById('aviso')
let linhas = ''
let lista = []



fmr.addEventListener('submit', function(e){
    e.preventDefault()
    

    if (lista.includes(nome.value)) {
        aviso(true)
    } else {
        linha(nome.value, telefone.value)
        aviso(false)
    }


})

function linha(aa, bb) {
    let linha = '<tr>'
    linha +=  `<td>${aa}</td>`
    linha +=  `<td>${bb}</td>`
    linha += '<tr>'
    linhas += linha 
    corpoTabela.innerHTML = linhas
    lista.push(aa)
}

function aviso(aa) {
    if (aa) {
        avisos.style.display = 'block'
        avisos.innerHTML = `O nome ${nome.value} ja esta cadastrado`
        nome.focus()
    } else {
        avisos.style.display = 'none'
    }
}




