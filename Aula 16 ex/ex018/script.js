let num = document.getElementById('num')
let list = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function final() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let max = valores[0]
        let min = valores[0]
        let sum = 0
        let media = 0
        for (let pos in valores){
            sum += valores[pos]
            if (valores[pos] > max) 
                max = valores[pos]
            if (valores[pos] < min)
                min = valores[pos]
        }
        media = sum/total


        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${max}</p>`
        res.innerHTML += `<p>O menor valor é ${min}</p>`
        res.innerHTML += `<p>Somando todos os valores tempos ${sum}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}