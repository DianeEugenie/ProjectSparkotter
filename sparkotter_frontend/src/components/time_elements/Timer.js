import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Timer extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTime: 0,
      timerOn: false,
      pausedTime: 0
    }

    this.countingDown = this.countingDown.bind(this);
    this.clickTimer = this.clickTimer.bind(this);
  }

  componentDidMount(){
    const seconds = this.props.time * 60;
    this.setState({selectedTime: seconds,
    pausedTime: seconds});
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }




  clickTimer(){

    if (!this.state.timerOn) {
      this.setState({timerOn: true});
      if (this.state.pausedTime === this.state.selectedTime) {
        this.interval = setInterval(this.countingDown, 1000);
      } else {
        this.setState({selectedTime: this.state.pausedTime});
      }
    } else {
      this.setState({timerOn: false});
      const pausedTime = this.state.selectedTime;
      this.setState({pausedTime: pausedTime});
    }

  }


  countingDown() {
    let counter = this.state.selectedTime;

    if (counter > 1) {
      counter -= 1;
      this.setState({selectedTime: counter});
    } else if (counter === 1 && this.state.timerOn) {
      this.props.changeTimesUp(true);
    }

  }

  render(){

    if (!this.state.selectedTime) {
      return null;
    }

    let timer = new Date(1000 * this.state.selectedTime).toISOString().substr(11,8);
    let pausedTime = new Date(1000 * this.state.pausedTime).toISOString().substr(11,8);

    return (
      <Fragment>
      <div className='timer'>

      {this.state.timerOn ?
        (<div><p className='timer-display'>{timer}</p>
          <button onClick={this.clickTimer}
      className="timer-button">Pause Timer</button></div>) :
      (<div><p className='timer-display'>{pausedTime}</p><button onClick={this.clickTimer}
      className="timer-button">Inspire Time</button></div>)}


      </div>
      </Fragment>

    );
  }
}

export default Timer;
