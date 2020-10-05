import React from 'react';
import logo from '../../logos/Group 1329.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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

                <Nav.Link style={{paddingLeft: '30px', color:'black'}} href="#">Home</Nav.Link>
                <Nav.Link style={{paddingLeft: '30px', color:'black'}} href="#">Donation</Nav.Link>
                <Nav.Link style={{paddingLeft: '30px', color:'black'}} href="#">Events</Nav.Link>
                <Nav.Link style={{paddingLeft: '30px', color:'black'}} href="#">Blog</Nav.Link>
                <Link to="/login" > <Button   style={{marginLeft: '10px', width:'100px'}}  variant="primary">Register</Button></Link>
                <Link to="/login" ><Button   style={{marginLeft: '10px', width:'100px'}}  variant="secondary">Admin</Button></Link>
          </Nav>
          
          </Navbar.Collapse>
           
  
  
        </Navbar>
  
  
      </Container>
    );
};

export default Header;