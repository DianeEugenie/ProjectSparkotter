// prop: randomPrompt
import React from 'react';
import Timer from '../time_elements/Timer';

const DisplayPrompt = (props) => {

  if (!props.prompt) {
    return "Sparky is fetching your prompt.."
  }

  const changeTimesUp = () => {
    props.changeTimesUp(true);
  }

  return(
    <div>
    <Timer time={props.time} changeTimesUp={props.changeTimesUp}/>
    <p className="prompt">{props.prompt}</p>


    {!props.time ?
      <button className="timer-button" onClick={changeTimesUp}>I'm Done!</button> : ''
    }
    </div>
  );
}

export default DisplayPrompt;
