const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025', '#000', '#0d6efd', '#6c757d', '#ffc107', '#0dcaf0', '#f8f9fa', '#212529', '#0d6efd'];
const btn = document.getElementById('btn');
const color = document.querySelector('.spanColor');

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumbers();
    document.querySelector('#mainColor').style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumbers() {
    return Math.floor(Math.random()*colors.length);
}