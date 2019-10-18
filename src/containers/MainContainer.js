//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Component, Fragment} from 'react';



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


      </Fragment>
    );
  }
}

export default MainContainer;
