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

const formValidation = () => {
    if (input.value == "" ) {
        msg.innerHTML = "you cannot add ablank task" 
        console.log("falure")  
    }
    if (input.value !== "") {
        msg.innerHTML =""
        console.log("success")
        acceptData()
    }
    
}
let data = {}

const acceptData = ()=>{
    data["text"] = input.value
    console.log (data)
}