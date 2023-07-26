import logo from './logo.svg';
import './App.css';
import React from "react";
import './PartOne'
import PartOne from "./PartOne";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";

class App extends React.Component {
    render() {
        return (
            <div>
                <PartOne/>
                <PartTwo/>
                <PartThree/>
            </div>
        );
    }
}

export default App;
