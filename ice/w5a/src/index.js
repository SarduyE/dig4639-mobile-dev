// var Task = require('./components/Task.js');
let element = undefined;
let taskInput
function runOnLoad()
{
    console.log('on page load');
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
        addTaskButton.addEventListener("click", onClick);
        taskInput = document.getElementById("tasktext");
}      
function onClick() {
    console.log('running onclick');

    var taskInput = document.getElementById('taskText');

    if ( taskInput.value ) {
        let newTask = document.createElement('div');

        //the input for each task
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.value = `${taskInput.value}`;
        input.addEventListener('change', function() {
            if (this.checked == true) {
                console.log('checked');
                console.log(input.value);
                input.nextSibling.style.textDecoration = 'line-through';
            } else {
                console.log('unchecked');
                console.log(input.value);
                input.nextSibling.style.textDecoration = 'unset';
            }
        });
        newTask.append(input);

        //the span
        let span = document.createElement('span');
        span.innerHTML = `${taskInput.value}`;
        newTask.appendChild(span);

        
        // newTask.innerHTML();
        element.appendChild(newTask);
    }
    // var props = {
    //     x: 'testx',
    //     y: 'testy'
    // }
    // let newTask = new Task(props);

    // newTask.render();
}

window.addEventListener('DOMContentLoaded', runOnLoad);