const hexa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.spanColor');

btn.addEventListener('click', function(){
    let hexaColor = '#';

    for(let i=0; i<6; i++) {
        hexaColor += hexa[getRandomNumbers()];
    }

    document.querySelector('#mainColor').style.backgroundColor = hexaColor;
    color.textContent = hexaColor;
})

function getRandomNumbers() {
    return Math.floor(Math.random()*hexa.length);
}