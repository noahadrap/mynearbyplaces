import {Card, CardGroup, CardDeck, CardColumns, ButtonGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {
  Link
  
} from "react-router-dom";
import business from './data'
import reviews from './reviews'
function Review () {
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