var botao = document.getElementById('botao')
var res = document.getElementById('res')

botao.addEventListener('click', tabuada)

function tabuada(){
    var num = document.getElementById('num').value
    if (num.length == 0){
        alert('Por favor insira um número!')
        res.innerHTML = ''
    }
    else {
        for(let c = 1; c<10; c++){
            let linha = document.createElement('option')
            linha.text = ` ${c} x ${num} = ${c*Number(num)} `
            res.appendChild(linha)
        }
    }
}