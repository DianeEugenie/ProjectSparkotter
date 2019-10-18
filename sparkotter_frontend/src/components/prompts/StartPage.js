// "/"
// Router "/options" for time
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const StartPage = (props) => {

  return (
    <Fragment>
    <p>This is the Start Page of the Prompt Container</p>
    <p>Which has a switch that leads to Time options!</p>
    </Fragment>
  );
}

export default StartPage;
