import React from "react";

class PartTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Stepan', age: 25, isToggleOn: true};
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div>
                <p style={{fontWeight: 'bold'}}>Second part</p>
                {this.state.isToggleOn ? <p>Name: {this.state.name}, age: {this.state.age}</p> : null}
                <button onClick={this.buttonHandler}>Click on me</button>
            </div>
        );
    }
}

export default PartTwo;



