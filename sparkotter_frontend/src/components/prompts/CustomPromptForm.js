import React, {Component} from 'react';
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
    const randomPrompt = customList[index].trim();
    this.props.onCustomSubmit(randomPrompt)

}

  render(){
    return (
      <div className="custom-prompt" >
      <p className="custom-intro">Type your own prompts here and <span className="sparky">Sparky</span> will give you a random one!</p>
      <p className="custom-intro">Separate each prompt with a comma!</p>
      <textarea type="text" placeholder="e.g. apple, banana" onChange={this.handleTextInput} value={this.state.customPrompt}/>

      {this.state.customPrompt ?
        (<Link to="/options"><button className="start-button" onClick={this.handleCustomSubmit} type="button">Submit Your Prompt!</button></Link>) : '' }
      </div>
    )

  }
}

export default CustomPromptForm;
