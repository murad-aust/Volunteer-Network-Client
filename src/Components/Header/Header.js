import React, { useContext } from 'react';
import logo from '../../logos/Group 1329.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Container>

      <Navbar expand="lg"  >

        <Navbar.Brand >
          <img
            src={logo}
            width="120"
            height="56"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"

          />
        </Navbar.Brand  >

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="navbar-nav ml-auto "  >

              <Link className="nav-link"  to="/home">Home</Link>
              <Link className="nav-link"  to="/home">Donation</Link>
              <Link className="nav-link"  to="/home">Events</Link>
              <Link className="nav-link"  to="/home">Blog</Link>

              {

                loggedInUser.success && loggedInUser.isSignedIn &&
                <Link className="nav-link"  to="/activities">My Activities</Link>
              }
           </Nav>
              <span style={{ color: 'orange', marginRight: '5px' }}  >{loggedInUser.name}</span>
              {

                loggedInUser.success && loggedInUser.isSignedIn ?
                  <Button variant="warning" onClick={() => setLoggedInUser({})}>Sign Out</Button>
                :
                <Link to="/login" ><Button style={{ marginLeft: '10px', width: '100px' }} variant="primary"> Login </Button> </Link>

              }
              <Link to="/admin" ><Button style={{ marginLeft: '10px', width: '100px' }} variant="secondary">Admin</Button></Link>
        
        </Navbar.Collapse>



      </Navbar>


    </Container>
  );
};

export default Header;