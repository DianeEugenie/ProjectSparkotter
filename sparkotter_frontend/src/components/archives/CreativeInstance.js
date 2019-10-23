import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const CreativeInstance = (props) => {

  const promptName = props.creativeInstance.prompt.prompt;
  const prompt = props.creativeInstance.prompt;
  const time = props.creativeInstance.prompt_time;

  const getResparkPrompt = () => {
    props.getResparkPrompt(prompt, time);
  }

  return (
    <Fragment>
      <div className="sparkive-instance">
        <p className="sparkive-prompt">{promptName}</p>
        <p className="sparkive-time">{props.creativeInstance.prompt_time} mins</p>
        <p className="sparkive-date">{moment(props.creativeInstance.dateCreated).local().format('LL')}</p>
        <Link to='/resparkoptions'> <button className="respark-buttons"onClick={getResparkPrompt}>Respark</button></Link>
      </div>
    </Fragment>
  )
}
export default CreativeInstance;
