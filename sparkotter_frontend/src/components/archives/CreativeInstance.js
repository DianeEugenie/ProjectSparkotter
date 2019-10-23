import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const CreativeInstance = (props) => {

  if (!props.creativeInstance){
    return "Loading...";
  }

  const promptName = props.creativeInstance.prompt.prompt;
  const prompt = props.creativeInstance.prompt;
  const time = props.creativeInstance.prompt_time;

  const getResparkPrompt = () => {
    props.getResparkPrompt(prompt, time);
  }

  const url = "/sparkive/spark/" + props.creativeInstance.prompt.id;

  return (
    <Fragment>
      <div className="sparkive-instance">
        <Link className="prompt-link"to={url}><p className="sparkive-prompt">{promptName}</p></Link>
        <p>{props.creativeInstance.prompt.customPrompt ? "Your Spark" : "Our Spark"}</p>
        <p className="sparkive-time">{props.creativeInstance.prompt_time} mins</p>
        <p className="sparkive-date">{moment(props.creativeInstance.dateCreated).local().format('DD MMM')}</p>
        <Link to='/resparkoptions'> <button className="respark-buttons"onClick={getResparkPrompt}>Respark</button></Link>
      </div>
    </Fragment>
  )
}
export default CreativeInstance;
