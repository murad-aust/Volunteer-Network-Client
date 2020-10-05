import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ActivityDetail.css'

const ActivityDetail = (props) => {

    const {_id, event, date, image} = props.activity;
    const history = useHistory();
  
 
        

    return (
        <Container >
        <div className="contain d-flex">
        <div>
            <img src={image} alt="" />
        </div>
        <div className="details">
            <h5>{event}</h5>
            <p> <span className="text-muted">{date}</span></p>
           
            <Button onClick={() =>props.removeActivity(_id)} className="cancelBtn"variant="light">Cancel</Button>
        </div>

    </div>
        </Container>
    );
};

export default ActivityDetail;