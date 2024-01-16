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
//look over from here
let data = {}

const acceptData = ()=>{
    data["text"] = input.value
    console.log (data)

    createTask()
}

//create function
const createTask = ()=>{
    tasks. innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class= "options">
            <i onclick = "editTasks(this)" class="fa-solid fa-file-pen"></i>
            <i onclick = "deleteTasks(this)" class="fa-solid fa-trash"></i>

        </span>
    </div>
    `
    input.value = "";
}

// the delete task function is targetting the parent element 
const deleteTasks = (element)=>{
    element.parentElement.parentElement.remove()

}

const editTasks = (element)=>{
    input.value = element.parentElement.previousElementSibling.innerHTML
    element.parentElement.parentElement.remove()

}