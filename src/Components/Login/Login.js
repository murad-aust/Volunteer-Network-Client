import React, { useContext } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import google from '../../logos/google.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const style = {
    backgroundColor: '#EEF5F3',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '660px',
    

  }


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }

    const googleSignIn= () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInWithPopup(googleProvider)
          .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              success: true
            }
      
          handleResponse(signedInUser, true);
         
      
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          })
      
      }

      const handleResponse = (res, redirect) => {
      
        setLoggedInUser(res);
    
       if (redirect) {
          history.replace(from);
        }
    
      }
      
      console.log(loggedInUser)


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
                <div className=" d-flex justify-content-center loginArea">
                
                  
                    <div>
                        <h3 style={{textAlign: 'center', fontWeight:'bold'}}>Login with</h3>
                        <br/>
                        <button className="social" onClick={googleSignIn}> <img className="socialImage" src={google} alt="" /> <span style={{ marginLeft: '20px' }}>Continue  with Google</span> </button>
                       <br/>
                        <p className="forgot-password text-center">
                             Don't have an account? <span className="text-info" style={{ cursor: 'pointer' }}>Create an account</span>
                         </p>
                    </div>
                  
                </div>
               

            </Container>
            
        </div>
    );
};

export default Login;