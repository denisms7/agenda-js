const fmr = document.getElementById('formulario')
const nome = document.getElementById('nome')
const telefone = document.getElementById('telefone')
const corpoTabela = document.querySelector('tbody')
let linhas = ''



fmr.addEventListener('submit', function(e){
    e.preventDefault()
    linha(nome.value, telefone.value)
})


function linha(aa, bb) {
    let linha = '<tr>'
    linha +=  `<td>${aa}</td>`
    linha +=  `<td>${bb}</td>`
    linha += '<tr>'
    linhas += linha 
    corpoTabela.innerHTML = linhas
}

