// <img timesup />
//< Link to= "/options" & "/sparkive"
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const TimesUpPage = (props) => {
  const optionsUrl = '/options';
  const sparkiveUrl = '/sparkive';

  return (
    <Fragment>
    <p>This is the Times Up of the Prompt Container</p>
    <p>Which lets you know the time is up!</p>
    <Link to={optionsUrl}><button>New Spark</button></Link>
    <Link to={sparkiveUrl}><button>Go To Your Sparkive</button></Link>
    </Fragment>
  );
}

export default TimesUpPage;
