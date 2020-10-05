import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css';



const Event = (props) => {
    const {_id,option, image}= props.event;

    const handleEvent = () =>{
      
    }
   
    return (
      <div >
        <Container >
        <Link to={"/event/"+_id}>   
              <Card onClick={handleEvent} className="card" style={{position: 'relative', bottom:'100px'}}>
                <Card.Img className="card-img" variant="top" src={image}/>
                <Card.Footer style={{background:'gray', height:'60px'}}>
                  <h6>{option}</h6> 
                </Card.Footer>  
            </Card>
            </Link>
  </Container>
  </div>
    );
};

export default Event;
