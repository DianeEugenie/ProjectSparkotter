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
    this.props.onSubmit(this.state.selectedTime);
  }



  render() {

  return (
    <Fragment>
    <p>OTTER IMAGE WILL BE HERE</p>
    <p>How much time do you have?</p>

      <Link to="/spark">
      <button type='button'
      value='5'
      className="time-option-button"
      onClick={this.handleOptions}>
      5
      </button>
      <button type='button'
      value='10'
      className="time-option-button"
      onClick={this.handleOptions}>
      10
      </button>
      <button type='button'
      value='20'
      className="time-option-button"
      onClick={this.handleOptions}>
      20
      </button>
      <button type='button'
      value='30'
      className="time-option-button"
      onClick={this.handleOptions}>
      30
      </button>
      <button type='button' value='60' onClick={this.handleOptions}>
      1 Hour</button>
      </Link>



        <input type='number'
        name="time"
        min='0'
        className="time-select"
        placeholder='0'
        onChange={this.handleCreatedOption} value={this.state.selectedTime} />

        <Link to="/spark">
        <button type="submit"
        onClick={this.handleSubmit}>Inspire Me!</button>
        </Link>



    </Fragment>
  );
}
}


export default OptionsForm;
