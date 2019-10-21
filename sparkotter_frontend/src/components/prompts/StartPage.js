// "/"
// Router "/options" for time
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
// import OptionsForm from '../../components/time_elements/OptionsForm';

const StartPage = (props) => {

  const optionUrl = '/options';
  const customUrl = '/custom';

  return (
    <Fragment>
      <Link to={optionUrl}><button className="start-button">
      Time To Spark</button></Link>
      <Link to={customUrl}><button className="custom-button">Ignite Your Own Spark!</button></Link>
    </Fragment>
  );
}

export default StartPage;
