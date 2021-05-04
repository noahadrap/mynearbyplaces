import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import {Link, useLocation} from "react-router-dom";
import api from "../communication/api"
 
function Delete (props) {
    let location = useLocation();
    const history = useHistory();
    const [message, setMessage] = useState('');

    let handleDelete = () => {
        let place = {id : location.state.id}
        console.log(place.id)
        api.deletePlace(place)
        .then(() => {console.log(`The place ${place.id} was added successfully`);
        })
        .catch(e => {console.log(e); setMessage (`There was an error in adding the place ${place.id}`);});
        console.log(message);
        history.push('/');
    }
    

    return (
        <Row><Col>
        <Form onSubmit={handleDelete}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Are you sure you want to delete this? If no, press the Home button.</Form.Label>
                <br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
                Delete business
                </Button>
        </Form>
        </Col></Row>
    );
}

export default Delete;