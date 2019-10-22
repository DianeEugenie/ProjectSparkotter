// "/options"
//state form options -- times
//handle options()
//button onclick get Prompt
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class OptionsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTime: ''
    }

    this.handleOptions = this.handleOptions.bind(this);
    this.handleCreatedOption = this.handleCreatedOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOptions(event){
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
    <Link to="/spark">
    <button type='button'
    value='null'
    className="time-option-button"
    onClick={this.handleOptions}>
    &#x221e;</button>
    </Link>
      <Link to="/spark">
      <button type='button'
      value='5'
      className="time-option-button"
      onClick={this.handleOptions}>
      5
      </button></Link>

      <Link to="/spark">
      <button type='button'
      value='10'
      className="time-option-button"
      onClick={this.handleOptions}>
      10
      </button>
      </Link>

      <Link to="/spark">
      <button type='button'
      value='20'
      className="time-option-button"
      onClick={this.handleOptions}>
      20
      </button>
      </Link>

      <Link to="/spark">
      <button type='button'
      value='30'
      className="time-option-button"
      onClick={this.handleOptions}>
      30
      </button>
      </Link>
      <Link to="/spark">
      <button type='button'
      value='60'
      className="time-option-button"
      onClick={this.handleOptions}>
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

          (<Link to="/spark">
        <button type='submit'
        className='time-select-button'
        onClick={this.handleSubmit}>Inspire Me!</button>
        </Link>)}




    </Fragment>
  );
}
}


export default OptionsForm;
