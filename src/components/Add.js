import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";

function Add (props) {
    const history = useHistory();
    const [businessList, setList] = useState(business)
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [address, setAddress] = useState('');

   
    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onAddressChange = (event) => {
        setAddress(event.target.value)
    }

    let onImageChange = (event) => {
        setImage(event.target.value)
    }
    function handleAdd() {
        business.push({id: business.length, name, image, address});
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