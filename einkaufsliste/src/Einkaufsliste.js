import React, { useState } from 'react';
import './Einkaufsliste.css';
import {InputGroup} from 'react-bootstrap';
import {FormControl} from "react-bootstrap";
import {Form} from 'react-bootstrap';
import DateTimePicker from 'react-datetime-picker';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Einkaufsliste() {

    const [name, setName] = useState(0)
    const [date, setDate] = useState(0)
    const [phonenumber, setPhonenumber] = useState("")
    const [email, setEmail] = useState("")
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [address, setAddress] = useState(1)

    const [value, onChange] = useState(new Date());


    return ( // JSX
        <div>
            <h1>Tischreservation</h1>
            <div id="formContainer">
                <>
                    <Form.Label htmlFor="basic-url">Persönliche Angaben</Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name/ Vorname</InputGroup.Text>
                        <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2">Adresse</InputGroup.Text>
                        <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            Telefonnummer
                        </InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3"/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            E-Mail Adresse
                        </InputGroup.Text>
                        <FormControl id="basic-url" aria-describedby="basic-addon3"/>
                    </InputGroup>

                    <InputGroup className="dateTimePicker mb-3">
                        <InputGroup.Text>Datum und Zeit auswählen</InputGroup.Text>
                        <FormControl className="datePicker" type="Date"/>
                        <FormControl className="timePicker" type="Time"/>
                    </InputGroup>
                </>
            </div>
        </div>
    )
}