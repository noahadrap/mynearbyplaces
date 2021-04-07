import {Card, CardGroup, CardDeck, CardColumns, ButtonGroup} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {
  Link
  
} from "react-router-dom";
import business from './data'



function Home () {
  const cardsArray = business.map(business => (
    
    <Card>
      <div class="text-center">{business.name}</div>
      <img class="card-img-top" src={business.image} alt="Card image cap" />
      <div class="text-center">{business.address}</div>
      <Link   to={
       {     
         pathname: '/delete',
         state:{id: business.id}, 
        }
  }> <Button >Delete</Button></Link>
  <Link   to={
       {     
         pathname: '/edit',
         state:{id: business.id}, 
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