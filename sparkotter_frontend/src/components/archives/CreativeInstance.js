import React, {Fragment} from 'react';

const CreativeInstance = (props) => {

const promptName = props.creativeInstance._embedded.prompt.prompt;

  return (<Fragment>
    <p>{promptName}</p>
    <p>{props.creativeInstance.dateCreated}</p>
    <p>{props.creativeInstance.prompt_time}</p>
  </Fragment>)
}
export default CreativeInstance;
