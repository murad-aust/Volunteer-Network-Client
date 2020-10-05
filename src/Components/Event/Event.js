import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css';



const Event = (props) => {
  const { _id, event, image } = props.event;

  const randomColor = () => {
    const background = ['#FFBD3E', '#421FCF', '#3F90FC', '#FF7044',]
    const color = background[Math.floor(Math.random() * background.length)];
    return color;
  }



  return (
    <div >
      <Container >
        <Link to={"/event/" + _id}>
          <Card  className="card" style={{ position: 'relative', bottom: '100px' }}>
            <Card.Img className="card-img" variant="top" src={image} />
            <Card.Footer style={{ backgroundColor: randomColor(), color: 'white', textAlign: 'center', height: '60px' }}>
              <h6>{event}</h6>
            </Card.Footer>
          </Card>
        </Link>
      </Container>
    </div>
  );
};

export default Event;
