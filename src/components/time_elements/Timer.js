import React, {Component, Fragment} from 'react';



class MainContainer extends Component{
  constructor(props){
  super(props);
  this.state = {
      selectedTime: 10,
    }

    this.countingDown = this.countingDown.bind(this);
    this.intervalFunction = this.intervalFunction.bind(this);
  }


  setMinuteTimer(){
    const seconds = 1 * 60;
    this.setState({selectedTime: seconds});
  }


  intervalFunction(){
    setInterval(this.countingDown, 1000);
  }


  countingDown() {
    let counter = this.state.selectedTime;

    if (counter > 1) {
      counter -= 1;
      this.setState({selectedTime: counter});
    } else {
      this.setState({selectedTime: "Time's up!"});
      //add window.location "spark/timesup"
    }


  }



  render(){

    return (
      <Fragment>
      Time to Spark!

      <p>{this.state.selectedTime}</p>

      <button onClick={this.intervalFunction}>Timer for one minute!</button>

      </Fragment>
    );
  }
}

export default MainContainer;
