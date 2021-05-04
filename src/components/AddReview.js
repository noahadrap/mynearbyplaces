import {Form, Button} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import business from "./data";
import reviews from "./reviews";
import api from "../communication/api"

function AddReview (props) {
    const history = useHistory();
    const [reviewsList, setList] = useState(reviews)
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [business, setBusiness] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');

   
    let onNameChange = (event) => {
        setName(event.target.value)
    }

    let onBusinessChange = (event) => {
        setBusiness(event.target.value)
    }

    let onReviewChange = (event) => {
        setReview(event.target.value)
    }
    let onRatingChange = (event) => {
        setRating(event.target.value)
    }  

    function handleAdd() {
        let newReview = {name: name, business: business, review : review, rating : rating}
        console.log(newReview.name);
        api.saveReviews(newReview)
        .then(() => {console.log(`The review by ${name} was added successfully`);
        setName('');
        setBusiness('');
        setReview('');
        setRating('');
        })
        .catch(e => {console.log(e); setMessage (`There was an error in adding the review by ${name}`);});
        console.log(message);
        history.push('/');
    }
    return (
        <Row><Col>
        <Form onSubmit={handleAdd}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Review Info</Form.Label>
                <Form.Control type="input" id="name" placeholder="Enter Your Name" onChange={onNameChange} />
                <Form.Control type="input" id="business"placeholder="Enter The Business You're Reviewing." onChange={onBusinessChange} />
                <Form.Control type="input" id="review" placeholder="Your review" onChange={onReviewChange} />
                <Form.Control type="input" id="rating" placeholder="Your rating out of 5" onChange={onRatingChange} />
                <br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>
        </Col></Row>
    );
}

export default AddReview;