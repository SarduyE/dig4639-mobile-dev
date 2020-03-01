import './index.css';
import React from 'react';

class Card extends React.Component {
  render() {
      return (
          <div className="card"><h3>{this.props.title}</h3> <p>{this.props.content}</p>
          <input className="close" value="X" type="button" onClick={this.props.clickRemove} check={this.props.title}></input>
             
            
          </div>
      );
  }
}

export default Card;