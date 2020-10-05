import React, { useContext, useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Register.css';
import logo from '../../logos/Group 1329.png';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const style = {
    backgroundColor: '#EEF5F3',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '660px',

}

const Register = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();

    const [event, setEvent] = useState([]);


    useEffect(() => {
        fetch('https://fast-woodland-36481.herokuapp.com/event/' + id)
            .then(res => res.json())
            .then(data => setEvent(data))

    }, [id]);

    const handleBlur = (e) => {
        loggedInUser[e.target.name] = e.target.value;

    }


    const handleSubmit = (e) => {

        const activities = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            date: loggedInUser.date,
            description: loggedInUser.description,
            event: event.event,
            image: event.image,
        }

        fetch('https://fast-woodland-36481.herokuapp.com/addActivities', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(activities)
        })
            .then(res => res.json())
            .then(data => {
                history.push("/activities")
            })

        e.preventDefault()


    }


    return (
        <div style={style}>
            <Container>
                <Navbar className="d-flex justify-content-center">
                    <Navbar.Brand >
                        <img
                            src={logo}
                            width="150"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"

                        />
                    </Navbar.Brand  >
                </Navbar>

                <div className="border  border-dark d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Register as a Volunteer</div>
                        <br />

                        <div className="form-group">
                            <input type="text" name="name" placeholder="Full Name" defaultValue={loggedInUser.name} />
                        </div>

                        <div className=" form-group">
                            <input type="email" name="email" placeholder="Username/Email" defaultValue={loggedInUser.email} />
                        </div>


                        <div className="form-group">
                            <input type="date" name="date" onBlur={handleBlur} placeholder="Date" required />
                        </div>



                        <div className="form-group">
                            <input type="text" name="description" onBlur={handleBlur} placeholder="Description" required />
                        </div>

                        <div className="form-group">
                            <input type="text" name="event" placeholder="Event" defaultValue={event.event} />
                        </div>

                        <div>
                            <input type="submit" className="btn btn-primary" value="Registration" />
                        </div>

                    </form>
                </div>
            </Container>
        </div>


    );
};

export default Register;