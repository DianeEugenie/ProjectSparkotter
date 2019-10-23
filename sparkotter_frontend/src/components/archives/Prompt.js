import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Prompt = (props) => {

  if(!props.prompt){
    return "Loading...";
  }

  const prompt = props.prompt;
  const time = props.prompt.prompt_time;

  const getResparkPrompt = () => {
    props.getResparkPrompt(prompt, time);
  }

  const instances = props.prompt._embedded.creativeInstances.map((instance, index) => {

    return <li key={index}><div className="prompt-instances"><p className="sparkive-date">{moment(instance.dateCreated).local().format('LL')}</p> <p className="sparkive-time">{instance.prompt_time} mins</p>
    </div></li>
  })


  return (

    <Fragment>
        <Link to="/sparkive"><button className="start-button">Back to Sparkive!</button></Link>
        <Link to='/resparkoptions'> <button className="start-button" onClick={getResparkPrompt}>Respark</button></Link>
        <p className="about-title">{props.prompt.prompt}</p>
        <ul>
        {instances}
        </ul>
    </Fragment>
  )
}
export default Prompt;
