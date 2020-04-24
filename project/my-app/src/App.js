
import React from 'react';
import './App.css';
import Contacts from './components/showprofile/contacts';
import Add from './components/showprofile/Add';
import Profile from './components/showprofile';
import Delete from './components/showprofile/Delete';





class App extends React.Component{
  
  // Refreshes to maintain contacts.
  constructor(props) {
    super(props);
    this.state = {contacts: [],
                   profile: []
            };

  }

  //using to fetch the contact list
  componentDidMount() {
    fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "sarduy"}})
    .then((res) => res.json())
    .then((data, ) => {
        console.log(data)
      this.setState({contacts: data.contacts});
    });
   
  }

  //using to fetch the profile list
  componentDidUpdate(){
  fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "sarduy"}})
  .then((res) => res.json())
  .then((datas) => {
    this.setState({profile:[datas]});
  });
  }


  //updates the contact
  add  (contact) {
    let addC = [...this.state.contacts]
    addC.push(contact)
    this.setState({contacts: addC});
  }

  //update removed contacts on client
  Delete  (position) {
    let removeC = [...this.state.contacts]
    removeC.splice(position, 1)
   this.setState({contacts: removeC});
  }

  

  render(){
  return (
    <div className="container">
  
   
 <h1 className="firsthead">Welcome to your contacts page.</h1>

    <Add className="add" newContact ={(contact) => this.add(contact) }/>

    <br/>
    <Contacts className="contacts" contacts = {this.state.contacts}/>
    <br/>
    <Profile className="profile" profile ={this.state.profile} />
    <br/>
    <Delete takeContact = {(position) => this.Delete(position)}/>
    <br/>
    </div>
  );
  }
}

export default App;