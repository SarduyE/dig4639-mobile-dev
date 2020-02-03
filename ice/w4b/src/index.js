import Component from "./Component.js";
import Task from "./Task.js";
function runOnLoad()
{
    
    // let element = document.createElement("div");
    // element.id = "container";
    // document.body.appendChild(element);
    // // console.log(x);
    // var comp = new Component(document.getElementById("addTask"));
    // let element2 = document.createElement("div");
    // element2.innerHTML = comp.render();
    // container.appendChild(element2);
    // console.log("Hello World truly");

    let container = document.createElement('container');
    console.log(container);
    let task = document.createElement('div');
    container.appendChild(task);
    task.innerHTML = firstTask.RENDER();

    document.getElementsByTagName('body')[0].appendChild(container);
}

let firstTask = new Task(
    {
        dont: false,
        content: "This is a task"
    }
)



window.addEventListener("DOMContentLoaded", runOnLoad);