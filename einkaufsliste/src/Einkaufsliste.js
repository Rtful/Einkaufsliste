import React, {useState} from 'react';
import './Einkaufsliste.css';
import {Form} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Einkaufsliste() {

    const [idCounter, setIdCounter] = useState(0)
    const initialList = [];
    const [list, setList] = useState(initialList);
    const [product, setProduct] = useState('');

    function handleChange(event) {
        setProduct(event.target.value);
    }

    function handleAdd() {
        setIdCounter(idCounter + 1)
        const newList = list.concat({name: product, id: idCounter});
        setList(newList);
    }

    function handleRemove(id) {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Einkaufsliste</h1>
            </header>
            <div id="addContainer">
                <input className="listInput" type="text" onChange={handleChange}/>
                <button className="addButton" onClick={handleAdd}></button>
            </div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <div>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`${item.name}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="button" className="removeButton" onClick={() => handleRemove(item.id)}></button>
                    </li>
                ))}
            </ul>
        </div>
    );

}