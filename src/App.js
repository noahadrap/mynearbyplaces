import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Add from './components/Add';
import AddReview from './components/AddReview';
import Delete from './components/Delete';
import Review from './components/Review';
import Edit from './components/Edit';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Container } from 'react-bootstrap';
import business from './components/data'
import React, { useEffect, useState } from "react";


function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [list, setList] = useState(business)
  let onLoggedIn = (email) => {
  localStorage.setItem('username', email);
  setUsername(email);
  }

  
  return (
    <HashRouter>
      <Container fluid>
      <Header />
      <NavigationBar username={username}/>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
          </Route>
        <Route path="/login">
        <Login onLoggedIn= {onLoggedIn} />
        </Route>
        <Route path="/add">
        <Add/>
        </Route>
        <Route path="/delete" component={Delete}>
        <Delete/>
        </Route>
        <Route path="/edit" component={Edit}>
        <Edit/>
        </Route>
        <Route path="/review" component={Review}>
        <Review/>
        </Route>
        <Route path="/addreview" component={AddReview}>
        <AddReview/>
        </Route>
        </Switch>
      <Footer />
      </Container>
    </HashRouter>
    );
  };
export default App;


