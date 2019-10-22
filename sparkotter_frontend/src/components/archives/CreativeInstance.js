import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const CreativeInstance = (props) => {

  const promptName = props.creativeInstance._embedded.prompt.prompt;
  const prompt = props.creativeInstance._embedded.prompt;
  const time = props.creativeInstance.prompt_time; 

  const getResparkPrompt = () => {
    props.getResparkPrompt(prompt, time);
  }

  return (<Fragment>
    <p>{promptName}</p>
    <p>{props.creativeInstance.dateCreated}</p>
    <p>{props.creativeInstance.prompt_time}</p>
  <Link to='/resparkoptions'> <button onClick={getResparkPrompt}>Respark</button></Link>
  </Fragment>)
}
export default CreativeInstance;


  //<Link to={optionsUrl}><button className="respark-button" onClick={handleRespark}>Respark</button>
