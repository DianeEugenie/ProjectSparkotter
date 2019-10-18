//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Component, Fragment} from 'react';
import PromptContainer from './prompts/PromptContainer';



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
      Time to Spark!
      <PromptContainer />


      </Fragment>
    );
  }
}

export default MainContainer;
