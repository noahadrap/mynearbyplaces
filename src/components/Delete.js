import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import {Link, useLocation} from "react-router-dom";


function Delete (props) {
    let location = useLocation();
    const history = useHistory();
    function handleDelete() {
    for (var i=0; i<business.length;i++) {
        if (location.state.id === business[i].id) {
            business.splice(i, 1);
        }
    }
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