import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const CreativeInstance = (props) => {

  const promptName = props.creativeInstance._embedded.prompt.prompt;
  const prompt = props.creativeInstance._embedded.prompt;
  const time = props.creativeInstance.prompt_time;

  const getResparkPrompt = () => {
    props.getResparkPrompt(prompt, time);
  }

  return (<Fragment>
    <p>{promptName}</p>
    <p>{moment(props.creativeInstance.dateCreated).local().format('LL')}</p>
    <p>{props.creativeInstance.prompt_time}</p>
  <Link to='/resparkoptions'> <button onClick={getResparkPrompt}>Respark</button></Link>
  </Fragment>)
}
export default CreativeInstance;
