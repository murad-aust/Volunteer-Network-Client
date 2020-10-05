import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Activities from './Components/Activities/Activities';
import AddEvent from './Components/AddEvent/AddEvent';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <PrivateRoute path="/event/:id">
            <Register></Register>
          </PrivateRoute>

          <PrivateRoute path="/activities">
            <Activities></Activities>
          </PrivateRoute>
          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>


    </UserContext.Provider>
  );
}

export default App;
