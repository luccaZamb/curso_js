var idade = 22
console.log(`Sua idade é: ${idade} anos`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 70) {
        console.log('Voto opcional')
    } else {
        console.log('Vota')
    }