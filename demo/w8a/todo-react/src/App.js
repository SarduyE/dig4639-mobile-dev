import React from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './task.json'


class TodoItem extends React.Component {
  render(){
    return<p className ="card" >{this.props.content}<input type="button" value="x" 
    onClick={() => this.props.removetask(this.props.id)} /></p>
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
     todoList: todoList,
     showOnlyUncompletedTasks: false
      }
  }
  removeTask(taskID){
    console.log(this.state.todoList)
    console.log(taskID)
    console.log(this.state.todoList[0].id)
    let newList = this.state.todoList.filter((task)=>(task.id !== taskID))
    console.log(newList)
    this.setState({todoList:newList})

  }

  addTask(){
    console.log(this.refs.taskContent.value)
    console.log(this.refs.priority.value)
    let newtask =
    { "id": this.currentID,
      "content": this.refs.taskContent.value,
       "priority": this.refs.priority.value, 
       "completed": false
       }
       this.currentID++;

    let currentList = this.state.todoList
    currentList.push(newtask)
    this.setState({todoList: currentList})
    console.log(newtask)
  }
  render (){
    return(
      <>
      <div className="inputTask">
        <input type="text" ref="taskContent"/>
        <select ref="priority">
          <option value= "1"> 1 </option>
          <option value= "2">2</option>
          <option value="3">3</option>
        </select>
        <input type="button" value="Add Task" onClick={()=> this.addTask()}/>
      <input type= "checkbox" ref="completedFilter"
      onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checked})}
      id="completedFilter" name="completedfilter" value="completed" />
      <label htmlFor="completedfilter">Show only completed tasks</label>
      </div>
      {(this.state.showOnlyUncompletedTasks ?
      this.state.todoList.filter((v)=> !v.completed)
      :
      this.state.todoList)
      .map((v, i)=> <TodoItem id={v.id} key={i} priority={v.priority}
      content={v.content} completed={v.completed}/>)}
    </>
      );
    }
  }

export default App;
