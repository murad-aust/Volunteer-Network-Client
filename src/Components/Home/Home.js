import React, { useEffect, useState } from 'react';
import background from '../../logos/Mask Group.png';
import Header from '../Header/Header';
import '../../App.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import Event from '../Event/Event';
const style = {
    backgroundImage: `url("${background}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight:'400px', 

  }

  const style1 = {
    marginTop:'20px',
    backgroundColor: '#EEF5F3',
    minHeight: '100vh'
   
  }
const Home = () => {
    const [events, setEvents] = useState([]);
   
     useEffect(()=>{
         fetch('http://localhost:5000/events')
         .then(res => res.json())
         .then(data =>setEvents(data))
     },[])

   
  
    return (
        <div >
            <div style={style}>
            <div className="transbox">
            <Header></Header>
            <div style={{textAlign: 'center', marginTop:'30px'}}>
            <h1 style={{textTransform: 'uppercase'}}>I grow by helping people in need. </h1>
            <Form className="d-flex justify-content-center" >
                <FormControl style={{ width: '350px', }} type="text" placeholder="Search...." className="mr-sm-2" />
                <Button>Search</Button>
            </Form>
            </div>
            </div>
            </div>
            <div style={style1}>
                {
                    events.map(event=><Event key={event.id} event={event}></Event>)
                }
            </div>
            
        </div>
    );
};

export default Home;