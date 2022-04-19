var botao = document.getElementById('botao')
botao.addEventListener('click', contapasso)

function contapasso(){
    var i = document.getElementById('inicio').value
    var f = document.getElementById('fim').value
    var p = document.getElementById('passo').value

    if (i == '' || f == '' || p == '') alert('Por favor preencha todos os campos!')
    else {

        var res = document.getElementById('div2')
        res.innerHTML = '<hr>Resultado: '
        for(i = Number(i); i <= Number(f); i+=Number(p)) res.innerHTML += `➜ ${i} `
        res.innerHTML += '🏁'
    }
    
}