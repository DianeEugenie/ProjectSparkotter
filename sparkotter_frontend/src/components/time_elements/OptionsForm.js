// "/options"
//state form options -- times
//handle options()
//button onclick get Prompt
import React, {Fragment} from 'react';

const OptionsForm = (props) => {

  return (
    <Fragment>
    <p>OTTER IMAGE WILL BE HERE</p>
    <p>How much time do you have?</p>
      <button>5 Minutes</button>
      <button>10 Minutes</button>
      <button>20 Minutes</button>
      <button>30 Minutes</button>
      <button>1 Hour</button>
      <input type="number" min="0"></input>
    </Fragment>
  );
}

export default OptionsForm;
