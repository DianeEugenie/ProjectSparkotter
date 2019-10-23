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
    <div className="start-buttons">
      <Link to={optionUrl}><button className="start-button">
      Spark My Creativity! <img className="lightbulb" src="https://media.discordapp.net/attachments/318372572775317505/635599554376499230/lightbulb.png" alt="lightbulb"/></button></Link>
      <Link to={customUrl}><button className="start-button">Ignite Your Own Spark! <img className="lightbulb" src="https://media.discordapp.net/attachments/318372572775317505/635599554376499230/lightbulb.png" alt="lightbulb"/></button></Link>
    </div>
    </Fragment>
  );
}

export default StartPage;
