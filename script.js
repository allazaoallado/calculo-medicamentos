function calcular(){
    let T = window.document.getElementById('t')
    let D = window.document.getElementById('d')
    let F = window.document.getElementById('f')

    let soma =  (Number(F.value) * Number(D.value))/Number(T.value)

    let resposta = window.document.getElementById('teste') 
    resposta.innerHTML = `Resposta: ${soma.toFixed(1).replace('.', ',')} ml`

    if(isNaN(soma)){
    resposta.innerHTML = 'Resposta:'

    }
}