// <Link to="/aboutus"></Link>
// <Link to="/sparkive"></Link>
import React,{Fragment} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const Footer = (props) => {
  return (
    <Router>
    <Fragment>
      <Link to="/aboutus">About us</Link>
      <Link to="/sparkive">Sparkive</Link>

    </Fragment>
    </Router>

  )
}
export default Footer;
