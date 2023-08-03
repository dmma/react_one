import {useState} from 'react';

export default function PartOne() {
    const [name, setName] = useState('Stepan');
    const [age, setAge] = useState(25);

    function buttonHandler(e) {
        setName('Mykola');
        setAge(30);
    }

    return (
        <div>
            <p style={{fontWeight: 'bold'}}>First part</p>
            <p>Name: {name}, age: {age}</p>
            <button onClick={buttonHandler}>Click on me</button>
        </div>);
}