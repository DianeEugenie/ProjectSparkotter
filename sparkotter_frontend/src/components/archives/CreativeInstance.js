import React, {Fragment} from 'react';
import moment from 'moment';

const CreativeInstance = (props) => {

const promptName = props.creativeInstance._embedded.prompt.prompt;

  return (<Fragment>
    <p>{promptName}</p>
    <p>{moment(props.creativeInstance.dateCreated).local().format('LL')}</p>
    <p>{props.creativeInstance.prompt_time}</p>
  </Fragment>)
}
export default CreativeInstance;
