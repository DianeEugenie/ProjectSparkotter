// "/"
// Router "/options" for time
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
// import OptionsForm from '../../components/time_elements/OptionsForm';

const StartPage = (props) => {

  const optionUrl = '/options';

  return (
    <Fragment>
    <p>OTTER IMAGE WILL BE HERE</p>
      <p>This is the Start Page of the Prompt Container</p>
      <p>Which has a switch that leads to Time options!</p>
      <Link to={optionUrl}><button>
      Time To Spark</button></Link>
    </Fragment>
  );
}

export default StartPage;
