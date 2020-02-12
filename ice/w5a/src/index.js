import Task from './components/Task/index.js'
let element
let taskInput
function runOnLoad () {
  console.log('on page load')
  // Create a container for us
  element = document.createElement('div')
  element.id = 'container'
  document.body.appendChild(element)

  // Handle adding a new task
  var addTaskButton = document.getElementById('addTask')
  var input = document.getElementById('taskText')
  addTaskButton.addEventListener('click', function () {
    onClick({ content: input.value, done: false })
  })
  taskInput = document.getElementById('tasktext')

  var existingTasks = [
    { content: 'Existing Task 1', done: false },
    { content: 'Existing Task 2', done: true },
    { content: 'Existing Task 3', done: false }
  ]

  for (var i = 0; i < existingTasks.length; i++) {
    console.log('existing task ' + i)
    onClick(existingTasks[i])
  }
}
// Task 1
function onClick (taskContent) {
  console.log('onclick')
  var input = document.getElementById('taskText')

  if (input.value) {
    console.log('running onclick')
    const newTask = new Task(taskContent)
    element.appendChild(newTask.render(taskContent))
    input.value = ''
  }
}

window.addEventListener('DOMContentLoaded', runOnLoad)
