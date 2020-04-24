import React from 'react';
import './index.css'

class Contacts extends React.Component {


  render() {
    return (
      
      <div className="contact">
          
        <h2 className="list">Current Contacts</h2>
        <h4>Name &amp; Number:</h4>
        <ol start="0">
    
       {
         
         this.props.contacts.map((value, index) => {
           return<li start="number" className="font"  key={index}>{value.name} ( {value.number} ) </li>;
         })

        
       }
        </ol>
      </div>
    );
  }
}

export default Contacts;