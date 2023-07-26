import React from "react";

class PartOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Stepan', age: 25};
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler() {
        this.setState({name: 'Mykola', age: 30})
    }

    render() {
        return (
            <div>
                <p style={{fontWeight: 'bold'}}>First part</p>
                <p>Name: {this.state.name}, age: {this.state.age}</p>
                <button onClick={this.buttonHandler}>Click on me</button>
            </div>);
    }
}

export default PartOne;