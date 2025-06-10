let form = document.getElementById('form')

form.addEventListener('submit', function(event) {

    event.preventDefault()

    let n1 = Number(document.querySelector('input[name="n1"]').value)
    let n2 = Number(document.querySelector('input[name="n2"]').value)

    let soma = n1 + n2

    console.log(soma)
})