let numberOfDrumButtons = document.querySelectorAll('.drum').length;

for(let i=0; i<numberOfDrumButtons; i++) {
    
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        
        let buttonInnerHTML = this.innerHTML

        makeSounds(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)
    });
}

document.addEventListener('keydown', function(event) {
    makeSounds(event.key)

    buttonAnimation(event.key)
})

function makeSounds(key) {

    switch(key) {
        case 'w': 
            new Audio('./sounds/tom-1.mp3').play()
            break;
        case 'a':
            new Audio('./sounds/tom-2.mp3').play()
            break;
       case 's': 
            new Audio('./sounds/tom-3.mp3').play()
            break;
        case 'd': 
            new Audio('./sounds/tom-4.mp3').play()
            break;
        case 'j':
            new Audio('./sounds/kick-bass.mp3').play()
            break;
        case 'k':
            new Audio('./sounds/crash.mp3').play()
            break;
        case 'l':
            new Audio('./sounds/snare.mp3').play()
            break;
        default:
            console.log('Botão não mapeado!') 
            break;   
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey)

    activeButton.classList.add('pressed')
    setTimeout(function() {
        activeButton.classList.remove('pressed')
    }, 200)
}