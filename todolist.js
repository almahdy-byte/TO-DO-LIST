let input= document.querySelector(".inputTasks")
let task = input.value
let form = document.querySelector(".task_input_field");
let divtasks = document.querySelector(".tasks");
let sub = document.querySelector(".submit")
let list_of_tasks = [];
if(window.localStorage.getItem("tasks"))
{
    list_of_tasks = JSON.parse(window.localStorage.getItem("tasks"));
}
getdatafromlocalstorage();
sub.onclick  = function()
{
let input= document.querySelector(".inputTasks")
let task = input.value

add_to_tasks(task);
addtolocalstorage(list_of_tasks)
add_to_page(list_of_tasks);
// return false;
}


function add_to_tasks(task)
{
    const task_id = {
        id : Date.now(),
        title : task,
        completed : false ,
    };
    list_of_tasks.push(task_id);
}


function add_to_page(list_of_tasks)
{
    divtasks.innerHTML=""
    list_of_tasks.forEach(e => {
    let div = document.createElement("div");
    div.classList.add("task_area");
    div.setAttribute("div-id",e.id);
    div.append(document.createTextNode(e.title));
    let divsspans =document.createElement("div")
    let span = document.createElement("span")
    span.classList.add("del")
    span.append(document.createTextNode("delete"))
    divsspans.append(span)
    divsspans.style.cssText= "background-color: transparent;"
    divtasks.append(div)
    div.append(divsspans)
});
}
function addtolocalstorage(list_of_tasks)
{
    window.localStorage.setItem("tasks" , JSON.stringify(list_of_tasks))
}
function getdatafromlocalstorage()
{
let data = window.localStorage.getItem("tasks");
if(data)
{
    let tasks = JSON.parse(data);
    add_to_page(tasks);
}
}
divtasks.addEventListener("click" , (e)=>
{
    if(e.target.classList.contains("del"))
    {
        removerlocal(e.target.parentElement.parentElement.getAttribute("div-id"))
        e.target.parentElement.parentElement.remove()
        if(divtasks.innerHTML=="")
        {
            divtasks.remove()
        }
    }
})
function removerlocal(taskid)
{
    list_of_tasks = list_of_tasks.filter((task) => task.id!=taskid)
    addtolocalstorage(list_of_tasks);
}