import React from "react";

class PartThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Stepan', age: 25, isToggleOn: false, buttonText: 'show'};
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler() {
        this.setState(prevState => (
            {
                isToggleOn: !prevState.isToggleOn,
                buttonText: prevState.isToggleOn ?  'show' : 'hide'
            }
        ))
    }

    render() {
        return (
            <div>
                <p style={{fontWeight: 'bold'}}>Third part</p>
                {this.state.isToggleOn ? <p>Name: {this.state.name}, age: {this.state.age}</p> : null}
                <button onClick={this.buttonHandler}>{this.state.buttonText}</button>
            </div>
        );
    }
}

export default PartThree;



