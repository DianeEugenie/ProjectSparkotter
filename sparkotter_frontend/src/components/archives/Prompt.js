import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Prompt = (props) => {
  const url = "/prompts/" + props.prompt.id;
  return (

    <Fragment>
      <Link to={url} className="promptName">
        {props.prompt.prompt}
      </Link>
    </Fragment>
  )
}
export default Prompt;
