function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('pic')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <= 12) {
                img.src = 'pics/foto-bebe-m.png'
            } else if(idade < 30){
                img.src = 'pics/foto-jovem-m.png'
            }else if (idade < 60) {
                img.src = 'pics/foto-adulto-m.png'
            }else{
                img.src = 'pics/foto-idoso-m.png' 
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 12) {
                img.src = 'pics/foto-bebe-f.png'
            } else if(idade < 30){
                img.src = 'pics/foto-jovem-f.png'
            }else if (idade < 60) {
                img.src = 'pics/foto-adulto-f.png'
            }else{
                img.src = 'pics/foto-idoso-f.png' 
            }
        }
        // if (fsex[0].checked && idade > 30 && idade < 65) { //adulto M
        //     genero = 'Homem'
        //     img.src = 'pics/foto-adulto-m.png'
        // }else if (fsex[0].checked && idade >= 65){ //idoso M
        //     genero = 'Homem'
        //     img.src = 'pics/foto-idoso-m.png'
        // }else if (fsex[0].checked && idade > 12 && idade < 30){ //Jovem M
        //     genero = 'Homem'
        //     img.src = 'pics/foto-jovem-m.png'
        // }else if (fsex[0].checked && idade <= 12){ //bebe M
        //     genero = 'Homem'
        //     img.src = 'pics/foto-bebe-m.png'
        // }else if (fsex[1].checked && idade > 30 && idade < 65){ //adulto F
        //     genero = 'Mulher'
        //     img.src = 'pics/foto-adulto-f.png'
        // }else if (fsex[1].checked && idade >= 65){ //idoso F
        //     genero = 'Mulher'
        //     img.src = 'pics/foto-idoso-f.png'
        // }else if (fsex[1].checked && idade > 12 && idade < 30){ //Jovem F
        //     genero = 'Mulher'
        //     img.src = 'pics/foto-jovem-f.png'
        // }else if (fsex[1].checked && idade <= 12){ //bebe F
        //     genero = 'Mulher'
        //     img.src = 'pics/foto-bebe-f.png'
        // }
        // else{
        //     alert('[ERROR] Verifique os dados e tente novamente!')
        // }
        res.innerHTML = `Detectamos um(a) ${genero} de ${idade} anos de idade.`
    }

}