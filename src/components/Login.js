import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";

function Login (props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onLoginSubmitted = () => {
        history.push('/');
        props.onLoggedIn(email)
    }

    let onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    return (
        <Row><Col>
        <Form onSubmit={onLoginSubmitted}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
                <br></br>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
        </Col></Row>
    );
}

export default Login;