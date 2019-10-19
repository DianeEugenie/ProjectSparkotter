// <Link to="/aboutus"></Link>
// <Link to="/sparkive"></Link>
import React,{Fragment} from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';


const Footer = (props) => {
  return (

    <Fragment>
    <p>
    <a href="/">Home</a>
      <a href="/aboutus">About us</a>
      <a href="/sparkive">Sparkive</a>
      </p>

    </Fragment>


  )
}
export default Footer;
