function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('pic')    
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hour}:${min}`

    if (hour >= 0 && hour < 12) {
        img.src = 'pics/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >= 12 && hour < 18) {
        img.src = 'pics/fototarde.png'
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = 'pics/fotonoite.png'
        document.body.style.background = '#515154'
    }
}