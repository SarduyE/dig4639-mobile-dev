import './index.css';
class Card {
    constructor(props) {
        this.props = props;
        // create todo block
        this.element = document.createElement('div');
        this.element.classList.add('card');
      
       
        // the span
        let span = document.createElement('span');
        span.innerHTML = this.props.content;
        this.element.appendChild(span);

  
    }
    

    render() {
        return this.element;
    }

}

export default Card;