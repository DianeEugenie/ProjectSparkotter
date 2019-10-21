// prop: randomPrompt
import React from 'react';
import {Link} from 'react-router-dom';

const DisplayPrompt = (props) => {

  if (!props.prompt) {
    return "Sparky is fetching your prompt.."
  }

  return(
    <div>
    <p className="prompt">{props.prompt}</p>

    {!props.time ?
      <Link to="/spark/timesup"><button className="timer-button">I'm Done!</button></Link> : ''
    }
    </div>
  );
}

export default DisplayPrompt;
