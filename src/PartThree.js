import {useState} from 'react';

export default function PartThree() {

    const [name, setName] = useState('Stepan');
    const [age, setAge] = useState(25);
    const [isToggleOn, setToggle] = useState(true);
    const [buttonText, setButtonText] = useState('show');

    function buttonHandler() {
        setToggle(prevState => !prevState);
        setButtonText(isToggleOn ? 'show' : 'hide');
    }

    return (
        <div>
            <p style={{fontWeight: 'bold'}}>Third part</p>
            {isToggleOn ? <p>Name: {name}, age: {age}</p> : null}
            <button onClick={buttonHandler}>{buttonText}</button>
        </div>
    );
}



