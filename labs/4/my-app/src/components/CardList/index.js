import React from 'react';
import Card from '../Card/index.js'
import data from './data.json'

class List extends React.Component {
  constructor(props) {
      super(props);
      this.state = {cards: data.cards};
  }

  removeTask = (ID) => {
      const check = ID.target.getAttribute("check");
      const newlist = this.state.cards.filter((ID) => ID.title !== check);
      console.log(this.state.cards)
      this.setState({cards: newlist});
  }

  render() {
      return (
              this.state.cards.map((ID, i) => {
                  return <Card  id={this.state.ID} title={ID.title}  content={ID.content} clickRemove={this.removeTask} key={i} />
              })
          
      );
  }
}

export default List;