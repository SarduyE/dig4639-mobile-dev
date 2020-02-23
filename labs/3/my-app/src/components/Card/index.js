import './index.css';
import React from 'react';
class Card extends React.Component{
    constructor(props) {
      super(props)
     
      
  
  }

  render() {
    return <div class="card">{this.props.content}</div>;
  }
  
    }
  
    

  


export default Card;