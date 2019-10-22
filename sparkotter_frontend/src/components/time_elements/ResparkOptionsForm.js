// "/options"
//state form options -- times
//handle options()
//button onclick get Prompt
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class ResparkOptionsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTime: ''
    }

    this.handleResparkOptions = this.handleResparkOptions.bind(this);
    this.handleCreatedOption = this.handleCreatedOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleResparkOptions(event){
  const minutes = event.target.value;
  this.props.onSubmit(minutes);
  }

  handleCreatedOption(event){
    this.setState({selectedTime: event.target.value});
  }

  handleSubmit(){
    if (this.state.selectedTime !== '') {
    this.props.onSubmit(this.state.selectedTime);
  }
  }



  render() {

  return (
    <Fragment>
    <p>Select your creative minutes:</p>

    <div className='button-options'>
    <Link to="/respark">
    <button type='button'
    value='null'
    className="time-option-button"
    onClick={this.handleResparkOptions}>
    &#x221e;</button>
    </Link>
      <Link to="/respark">
      <button type='button'
      value='5'
      className="time-option-button"
      onClick={this.handleResparkOptions}>
      5
      </button></Link>

      <Link to="/respark">
      <button type='button'
      value='10'
      className="time-option-button"
      onClick={this.handleResparkOptions}>
      10
      </button>
      </Link>

      <Link to="/respark">
      <button type='button'
      value='20'
      className="time-option-button"
      onClick={this.handleResparkOptions}>
      20
      </button>
      </Link>

      <Link to="/respark">
      <button type='button'
      value='30'
      className="time-option-button"
      onClick={this.handleResparkOptions}>
      30
      </button>
      </Link>
      <Link to="/respark">
      <button type='button'
      value='60'
      className="time-option-button"
      onClick={this.handleResparkOptions}>
      60</button>
      </Link>


  </div>

        <input type='number'
        name="time"
        min='0'
        className="time-select"
        placeholder='Or enter your own!'
        onChange={this.handleCreatedOption} value={this.state.selectedTime} />

        {this.state.selectedTime === '' ? ('') :

          (<Link to="/respark">
        <button type='submit'
        className='time-select-button'
        onClick={this.handleSubmit}>Inspire Me!</button>
        </Link>)}




    </Fragment>
  );
}
}


export default ResparkOptionsForm;
