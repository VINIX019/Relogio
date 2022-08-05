function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.` 
    if(hora >=0 && hora < 12){
        img.src = "fotomanha.png"
        document.body.style.background = '#c4c5c0'
    }else if(hora >=12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#ea8e3b'
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#483855'
    }
}