class Task {
    constructor(props) {
        this.props = props;
        
        console.log(this.props);
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return `<input type="checkbox"></input><span class="content">Finish in class exercise</span>`;
    }

}
export default Task;