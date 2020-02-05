import './index.css';
class Task {
    constructor(props) {
        this.props = props;
        // create todo block
        this.element = document.createElement('div');
        this.element.classList.add('task');
        // the checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        this.element.appendChild(checkbox);
       
        // the span
        let span = document.createElement('span');
        span.innerHTML = this.props.content;
        this.element.appendChild(span);

        // set onclick
        // this.onClick.bind(this);
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener('change', this.onClick);
    }

    onClick(e) {
        console.log(e);
        console.group(e.target);
        console.log(e.target.checked);
        console.log(this.props);

        if (e.target.checked == true) {
            e.target.parentElement.setAttribute('data-done', true);
            console.log('checked');
            this.props.done = true;
        } else {
            e.target.parentElement.setAttribute('data-done', false);
            console.log('unchecked');
            this.props.done = false;
        }
    }

    render() {
        return this.element;
    }
}

export default Task;