import {useState} from 'react';

export default function PartTwo() {

    const [name, setName] = useState('Stepan');
    const [age, setAge] = useState(25);
    const [isToggleOn, setToggle] = useState(true);

    function buttonHandler() {
        setToggle(prevState => !prevState);
    }

    return (
        <div>
            <p style={{fontWeight: 'bold'}}>Second part</p>
            {isToggleOn ? <p>Name: {name}, age: {age}</p> : null}
            <button onClick={buttonHandler}>Click on me</button>
        </div>
    );

}



