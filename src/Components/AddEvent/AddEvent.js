import { Container } from '@material-ui/core';
import React from 'react';
import { Button, Col, Form, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import user from '../../logos/users-alt 1.png'
import plus from '../../logos/plus 1.png'
import { Link, useHistory } from 'react-router-dom';

const AddEvent = () => {
    const history = useHistory();
    const events = {
        event: '',
        date: '',
        description: '',
        image: '',
    }
    const handleBlur = (e) => {
        events[e.target.name] = e.target.value;
        console.log(events)

    }


    const handleSubmit = () => {


        fetch('https://fast-woodland-36481.herokuapp.com/addEvent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events)
        })
            .then(res => res.json())
            .then(data => {
                history.push("/admin")
            })


    }


    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }} >
            <Container className="d-flex" >
                <div>
                    <Navbar >
                        <Navbar.Brand >
                            <img
                                src={logo}
                                width="120"
                                height="60"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"

                            />
                        </Navbar.Brand  >
                    </Navbar>

                    <div>
                        <Link to="/admin">
                            <Button variant="light" style={{ width: '210px' }}> <img style={{ width: '15px', height: '15px' }} src={user} alt="" /> Volunteer Register List</Button>
                        </Link>
                        <br />
                        <Link to="/addEvent">
                            <Button variant="light" style={{ width: '210px', marginTop: '10px' }}><img style={{ width: '15px', height: '15px' }} src={plus} alt="" />  Add Event</Button>
                        </Link>
                    </div>
                </div>

                <div style={{ margin: '30px', width: '100%', backgroundColor: 'white' }}>
                    <h3 style={{ margin: '20px' }} >Add Event</h3>
                    <div style={{ margin: '20px', }}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicText">
                                    <Form.Label>Event Title</Form.Label>
                                    <Form.Control type="text" name="event" onBlur={handleBlur} placeholder="Event Title" />

                                </Form.Group>

                                <Form.Group as={Col} controlId="formBasicText">
                                    <Form.Label>Event Date</Form.Label>
                                    <Form.Control name="date" onBlur={handleBlur} placeholder="" type="date" placeholder="Date" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formBasicText">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control name="description" onBlur={handleBlur} type="text" placeholder="Description" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicFile">
                                    <Form.Label>Banner</Form.Label>
                                    <Form.Control name="image" onBlur={handleBlur} type="text" placeholder="Hosting Image URL" />
                                </Form.Group>
                            </Form.Row>
                            <input  onClick={handleSubmit} className="btn btn-primary " type="submit" value="Submit"/>
                               
                        </Form>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default AddEvent;
