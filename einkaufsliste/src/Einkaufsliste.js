import React, {useState} from 'react';
import './Einkaufsliste.css';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from "react-bootstrap";
import {Form} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

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

    function ShoppingListElement(text) {
        return (
            <div>
                {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                        />
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>Deine Einkaufsliste</h1>
            <header className="App-header">
                <input type="text" onChange={handleChange}/>
                <button onClick={handleAdd}>+ add item</button>
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>{item.name}
                            <div>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={`default ${type}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button type="button" onClick={() => handleRemove(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );

}