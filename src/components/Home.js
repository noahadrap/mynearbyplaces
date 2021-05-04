import {Card, CardGroup, CardDeck, CardColumns, ButtonGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {
  Link
  
} from "react-router-dom";
import {useEffect, useState} from "react";
import business from './data'
import api from "../communication/api"



function Home () {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    if (places.length == 0) {
      api.getPlaces()
      .then(x => setPlaces(x))
      .catch(e => console.log(e));
    }
  })
  const cardsArray = places.map(place => (
    
    <Card>
      <div class="text-center">{place.name}</div>
      <img class="card-img-top" src={place.image} alt="Card image cap" />
      <div class="text-center">{place.address}</div>
      <Link   to={
       {     
         pathname: '/delete',
         state:{id: place.id}, 
        }
  }> <Button >Delete</Button></Link>
  <Link   to={
       {     
         pathname: '/edit',
         state:{id: place.id}, 
        }
  }> <Button >Edit</Button></Link>
      
    </Card>
    )
  );
  
  
 return (
   <div>
     <CardGroup>
     {cardsArray}
     </CardGroup>
    
   </div>
 )
};
export default Home; 