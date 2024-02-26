function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crincça
                img.setAttribute('src', 'bebes.jpg')
            } else {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebesf.jpg')
            } else { //adulto
                img.setAttribute('src', 'mulher.jpg')
            }
        }
        //res.style.textAlign = 'center'
        res.innerHTML = ` Voce é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

