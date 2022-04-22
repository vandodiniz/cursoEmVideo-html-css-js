var botao = document.getElementById('botao')
botao.addEventListener('click', contapasso)

function contapasso(){
    var i = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var p = document.getElementById('passo').value
    var res = document.getElementById('div2')

    if (i == '' || f == '' || p == ''){ 
        alert('Por favor preencha todos os campos!')
        res.innerHTML = ''
    }
    else {

        if(p <= 0){
            alert('Passo inválido! Consideraremos PASSO = 1')
            p = 1
        }

        res.innerHTML = '<hr>Resultado: '
        if(f>i)
            for(i = Number(i); i <= Number(f); i+=Number(p)) res.innerHTML += `➜ ${i} `
        else
            for(i = Number(i); i >= Number(f); i-=Number(p)) res.innerHTML += `➜ ${i} `
        res.innerHTML += '🏁'
    }
    
}