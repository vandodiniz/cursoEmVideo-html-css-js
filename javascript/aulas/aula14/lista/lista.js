var vetor  = []
var lista = document.getElementById('lista')
var res = document.getElementById('div2')

function adicionar(){
    let number = document.getElementById('num')
    let n = Number(number.value)

    if (number.value.length == 0 || n <= 0 || n > 100)
        alert('Insira um número válido!')

    else if (vetor.indexOf(n) != -1)
        alert('Número já está na lista!')

    else{
        vetor.push(n)
        let linha = document.createElement('option')
        linha.text = `Número ${n} selecionado`
        lista.append(linha)
    }
    res.innerHTML = ''
    number.value = ''
    number.focus()
}

function calcular(){
    var tam = vetor.length

    if(tam >= 2){
        var soma = 0
        // for(var pos = 0; pos < tam; pos++)
        //     soma += vetor[pos]

        // for (let pos in vetor)
        //     soma += vetor[pos]

        for (let elemento of vetor)
            soma += elemento

        var maior = Math.max.apply(null, vetor)
        var menor = Math.min.apply(null, vetor)

        res.innerHTML = `<p>Ao todo temos ${vetor.length} números cadastrados. O maior valor é ${maior}  e o menor é ${menor}. A soma de todos os elementos é ${soma} e a média é ${soma/tam}.</p>`
    }

    else
        alert('Insira pelo menos 2 elementos na lista')
}

function limpar(){
    vetor.length = 0
    lista.innerHTML = ''
    res.innerHTML = ''
}
