import React, {Component, Fragment} from 'react';

class Timer extends Component{
  constructor(props){
    super(props);
    const seconds = props.time * 60;
    this.state = {
      selectedTime: seconds
    }

    this.countingDown = this.countingDown.bind(this);
    this.intervalFunction = this.intervalFunction.bind(this);
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
      window.location = "/spark/timesup"
    }


  }

  render(){

    let timer = new Date(1000 * this.state.selectedTime).toISOString().substr(11,8);

    return (
      <Fragment>
      <div className='timer'>
      <p className='timer-display'>{timer}</p>

      <button onClick={this.intervalFunction}
      className="timer-button">Time To Spark!</button>
      </div>
      </Fragment>
    );
  }
}

export default Timer;
