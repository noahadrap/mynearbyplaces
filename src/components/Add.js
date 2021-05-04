import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import api from "../communication/api" 

function Add (props) {
    const history = useHistory();
    const [businessList, setList] = useState(business)
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

   
    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onAddressChange = (event) => {
        setAddress(event.target.value)
    }

    let onImageChange = (event) => {
        setImage(event.target.value)
    }
    let handleAdd = () => {
        let place = {name: name, address: address, image: image}
        console.log(place.name);
        api.savePlace(place)
        .then(() => {console.log(`The place ${name} was added successfully`);
        setName('');
        setAddress('');
        setImage('');
        })
        .catch(e => {console.log(e); setMessage (`There was an error in adding the place ${name}`);});
        console.log(message);
        history.push('/');
    }
    return (
        <Row><Col>
        <Form onSubmit={handleAdd}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Business Info</Form.Label>
                <Form.Control type="input" id="name" placeholder="Enter Name" onChange={onNameChange} />
                <Form.Control type="input" id="address"placeholder="Enter Address" onChange={onAddressChange} />
                <Form.Control type="input" id="image" placeholder="Enter image link" onChange={onImageChange} />
                <br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
        </Col></Row>
    );
}

export default Add;