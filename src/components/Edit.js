import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import {Link, useLocation} from "react-router-dom";
import api from "../communication/api"

function Edit (props) {
    const history = useHistory();
    let location = useLocation();
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
    function handleEdit() {
        let place = {name: name, address: address, image: image, id: location.state.id}
        console.log(place.name);
        api.editPlace(place)
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
        <Form onSubmit={handleEdit}>
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

export default Edit;