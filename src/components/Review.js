import {Card, CardGroup, CardDeck, CardColumns, ButtonGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {
  Link
  
} from "react-router-dom";
import business from './data'
import reviews from './reviews'
import api from "../communication/api"
import {useEffect, useState} from "react";

function Review () {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (reviews.length == 0) {
      api.getReviews()
      .then(x => setReviews(x))
      .catch(e => console.log(e));
    }
  })
    const cardsArray = reviews.map(reviews => (
      <Card>
        <div class="text-center">{reviews.business}</div>
        <div class="text-center">{reviews.name}</div>
        <div class="text-center">"{reviews.review}"</div>
        <div class="text-center">{reviews.rating}/5</div>
      </Card>
      )
    );
    
    
   return (
     <div>
       <CardDeck>
       {cardsArray}
       </CardDeck>
      
     </div>
   )
  };
  export default Review;