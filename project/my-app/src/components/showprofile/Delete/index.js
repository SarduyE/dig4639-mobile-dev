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

class Delete extends React.Component {

  constructor(props) {
    super(props);


    this.textInput = React.createRef();
 
      this.state = {
      value: '',
    }
  }


  delVal= () => {
    let newHeaders = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        position:this.textInput.current.value,
      })}

      fetch("http://plato.mrl.ai:8080/contacts/remove", newHeaders)
      .then((res) => res.json())
      .then((data) => {
       
       this.props.takeContact(this.textInput.current.value)
        console.log(data)
    }
    , [])
  }

  handleSubmit = e => {
    e.preventDefault();
    this.delVal()
  }

  render() {
    return (
      <div className="delete">
         <h2>Delete a contact</h2> <form onSubmit={this.handleSubmit}>
 
          <label htmlFor="name" className="pos">Please enter the position of the contact on the list above (beginning with 0): </label><br/>
          <input type="text" className="num" ref={this.textInput} id ="position" /><br/>

          <button type="submit" className="button2">SUBMIT</button>
       </form>
    </div>
    );
  }
}

export default Delete;