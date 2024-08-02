const inputs = document.querySelectorAll('.input')
const infos = document.querySelectorAll('.info')
const button = document.getElementById('send')

// console.log(inputs)
// console.log(icons)
// console.log(infos)
// console.log(button)

button.addEventListener('click', (action) => {
    action.preventDefault()
    inputs.forEach((input, index) => {
        // console.log(input.value)
        if (input.value === ""){
            
            input.classList.add('empty')
            input.nextElementSibling.classList.add('show')
            infos[index].classList.add('show')            
        } else { 
            input.classList.add('filled')
            input.classList.remove('empty')
        }
    })
})