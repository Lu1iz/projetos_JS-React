//Player1
let randomNumber1 = Math.floor(Math.random() *6) +1
let randomImgSource = 'img/dice' + randomNumber1 + '.png'

document.querySelectorAll('img')[0].setAttribute('src', randomImgSource)

//Player2
let randomNumber2 = Math.floor(Math.random() *6) +1
let randomImgSource2 = 'img/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImgSource2)

//Condições
if(randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = '🏆 Player 1 won!'
}else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = '🏆 Player 2 won!'
}else {
    document.querySelector('h1').innerHTML = '🤔 Draw'
}