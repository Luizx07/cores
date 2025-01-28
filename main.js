"use strict"
const botaoTrocaCor = document.getElementById('trocar-cor')

function trocarCor () {
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-fundo', cor)
}

botaoTrocaCor.addEventListener('click', trocarCor)