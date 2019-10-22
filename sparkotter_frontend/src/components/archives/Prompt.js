import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Prompt = (props) => {
  const url = "/prompts/" + props.prompt.id;
  return (

    <React.Fragment>
      <Link to={url} className="promptName">
        {props.prompt.prompt}
      </Link>
    </React.Fragment>
  )
}
export default Prompt;
