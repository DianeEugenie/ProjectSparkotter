import React, {Component} from 'react';
import Request from '../../helpers/Request';
import {Link} from 'react-router-dom';

class CustomPromptForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      customPrompt: ""
    }
    this.handleCustomSubmit = this.handleCustomSubmit.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }


  handleTextInput(event){
    this.setState({customPrompt: event.target.value});
  }

  handleCustomSubmit(event){
    const customList = this.state.customPrompt.split(',');
    const min = 1;
    const max = customList.length;
    const index = Math.floor((min + Math.random() * (max - min)));
    const randomPrompt = customList[index];
    this.props.onCustomSubmit(randomPrompt)
  }

  render(){
    return (
      <div>
      <input type="text" placeholder="Custom Prompt" name="customPrompt" onChange={this.handleTextInput} value={this.state.customPrompt}/>
        <Link to="/options"><button onClick={this.handleCustomSubmit} type="button">Submit Your Prompt!</button></Link>
      </div>
    )

  }
}

export default CustomPromptForm;