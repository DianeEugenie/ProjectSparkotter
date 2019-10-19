//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Component, Fragment} from 'react';
import PromptContainer from './prompts/PromptContainer';
import ArchiveContainer from './archives/ArchiveContainer';


class MainContainer extends Component{
  constructor(props){
  super(props);
  this.state = {
      selectedTime: null,
    }


  }

  render(){

    return (
      <Fragment>
      <PromptContainer />
      <ArchiveContainer /> 


      </Fragment>
    );
  }
}

export default MainContainer;
