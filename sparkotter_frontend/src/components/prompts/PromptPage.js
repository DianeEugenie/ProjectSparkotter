// "/spark"
// props time  & randomPrompt
import React, {Fragment} from 'react';

import DisplayPrompt from '../../components/prompts/DisplayPrompt';
import TimesUpPage from '../../components/time_elements/TimesUpPage';

const PromptPage = (props) => {

  return (
    <Fragment>
    <div className="prompt-page">
    {props.timesup ? (<TimesUpPage prompt={props.prompt} changeTimesUp={props.changeTimesUp}/>) :
    (<DisplayPrompt prompt={props.prompt} time={props.time} changeTimesUp={props.changeTimesUp}/>)}




    </div>

    </Fragment>

  );
}

export default PromptPage;
