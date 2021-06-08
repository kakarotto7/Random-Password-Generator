import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import './Home.css';
import logo from './file.jpg';


function Home() {
  return (<Router>
    <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">  
          <Link className="navbar-brand" to={"/App"}><img src={logo} alt="logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/App"}><h4 className="navbar-title">Home</h4></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={App} />
            <Route path="/app" component={App} /> 
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default Home;