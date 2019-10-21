// "/spark"
// props time  & randomPrompt
import React, {Fragment} from 'react';
import Timer from '../../components/time_elements/Timer';
import DisplayPrompt from '../../components/prompts/DisplayPrompt';

const PromptPage = (props) => {

  return (
    <Fragment>
    <div className="prompt-page">
    <Timer time={props.time}/>
    <DisplayPrompt prompt={props.prompt} time={props.time}/>


    </div>

    </Fragment>

  );
}

export default PromptPage;
