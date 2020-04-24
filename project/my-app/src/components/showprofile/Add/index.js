import React from 'react';
import './index.css'

const HEADERS ={
    "Method" : "GET",
    "headers" : {
      "API" : "sarduy",
      "Content-Type" : "application/json",
      "Accept": "application/json"
    }
  }

class Add extends React.Component {

  constructor(props) {
    super(props);

  
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();

  
    this.state = {
      value: '',
      value2: ''
    }
  }


     
      newVal= () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.textInput.current.value,
            number:this.textInput2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.props.newContact(data.added)
              console.log(data)
        }
        , [])
      }


  handleSubmit = e => {
    e.preventDefault();
    this.newVal()
  }
  

  
  render() {

    return (
      <div className="add">
        <h2 className="title">Add Contact</h2>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name" className="text">Name:</label><br/> 
            <input type="text" className="take1" ref={this.textInput} id ="name" /><br/>

            <label htmlFor="name" className="text1">Number:</label><br/>
            <input type="text" className="num1" ref={this.textInput2} id ="number" /><br/>  <button type="submit" >SUBMIT</button>
         </form>
      </div>
    );
  }
}

export default Add;