import React, {Component} from 'react';
import Request from '../../helpers/Request';

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
    event.preventDefault();
    const customList = this.state.customPrompt.split(',');
    const min = 1;
    const max = customList.length;
    const index = Math.floor((min + Math.random() * (max - min)));
    const randomPrompt = customList[index]

    this.props.onCustomSubmit(randomPrompt)
  }

  render(){
    return (
      <div>
      <form onSubmit={this.handleCustomSubmit}>
      <input type="text" placeholder="Custom Prompt" name="customPrompt" onChange={this.handleTextInput} value={this.state.customPrompt} />
      <button type="submit">Submit Your Prompt!</button>
      </form>
      </div>
    )

  }
}

export default CustomPromptForm;
