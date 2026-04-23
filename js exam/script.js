let task = []
let index = -1

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault()
    
    addData()
})

function addData() {

    let taskInput = document.getElementById("taskInput").value
    let disInput = document.getElementById("disInput").value

   
    let obj = {
        task: taskInput,
        desc: disInput
    }

    if (index === -1) {
        task.push(obj)
    } else {
        task[index] = obj
        index = -1
    }

    document.getElementById("taskInput").value = ""
    document.getElementById("disInput").value = ""

    display()
}

function display() {

    let result = document.getElementById("result")
    result.innerHTML = ""

    task.forEach((item, id) => {
        result.innerHTML += `
            <div>
                <b>${item.task}</b> - ${item.desc}
                <button onclick="editData(${id})">Edit</button>
                <button onclick="removeData(${id})">Remove</button>

                
            </div>
        `
    
    })
}

function removeData(id) {
    task.splice(id, 1)
    display()
}

function editData(id) {
     index = id
    document.getElementById("taskInput").value = task[id].task
    document.getElementById("disInput").value = task[id].desc

   
}