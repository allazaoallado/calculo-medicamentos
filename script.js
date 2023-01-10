function calcular(){
    let T = window.document.getElementById('t')
    let D = window.document.getElementById('d')
    let F = window.document.getElementById('f')

    let soma =  (Number(T.value) * Number(D.value))/Number(F.value)

    let resposta = window.document.getElementById('teste') 
    resposta.innerHTML = `Resposta: ${soma}`

    if(isNaN(soma)){
    resposta.innerHTML = 'Resposta:'
    
    }
}