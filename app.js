console.log('ok')

let formContainer = document.getElementById("formContainer")
let input = document.getElementById ("myTask")
let msg = document.getElementById ("msg")
let tasks = document.getElementById("tasksContainer")

formContainer.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("button was clicked")

    formValidation()
})

let formValidation = () => {
    
}