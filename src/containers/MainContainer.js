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

  // countingDown(){
  //   const newTime = () => {
  //     const currentTime = this.state.selectedTime;
  //     return currentTime - 1;
  //   }
  //   this.setState({selectedTime: setInterval(newTime, 1000)});
  //
  // }

  setMinuteTimer(){
    const seconds = 1 * 60;
    this.setState({selectedTime: seconds});
  }

  // displayTime(){
  //   while (this.state.selected > 0) {
  //     const newTime = this.state.selectedTime - 1;
  //     return newTime;
  //   }
  //
  //   return "Time's up!"
  // }

  // secondsLeft(){
  //   return setInterval(this.displayTime, 100);
  // }

  //
  //

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
