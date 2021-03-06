// "/"
//state: randomPrompt
//function: handle Options()
//Router / TimesUpPage - PromptPage StartPage
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PromptPage from '../../components/prompts/PromptPage';
import StartPage from '../../components/prompts/StartPage';
import OptionsForm from '../../components/time_elements/OptionsForm';
import CustomPromptForm from '../../components/prompts/CustomPromptForm';
import Request from '../../helpers/Request';

class PromptContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: "",
      time: null,
      custom: false,
      promptInstance: null,
      timesUp: false
    }

    this.handleOptions = this.handleOptions.bind(this);
    this.sendPrompt = this.sendPrompt.bind(this);
    this.sendInstance = this.sendInstance.bind(this);
    this.onCustomSubmit = this.onCustomSubmit.bind(this);
    this.changeTimesUp = this.changeTimesUp.bind(this);
  }




  fetchPrompt(){
    const request = new Request();

    const adjPromise = request.get("/api/adjectiveWords/word/random");
    const nounPromise = request.get("/api/nounWords/word/random");

    Promise.all([adjPromise, nounPromise])
    .then(data => {
      this.setState({prompt: data[0].adjectiveCap + " " + data[1].nounCap})
    })
    .then(() => this.sendPrompt())

  }

  handleOptions(minutes){
    if (minutes === 'null') {
      this.setState({time: null});
    } else {
      this.setState({time: minutes});
    }

    if(!this.state.custom) {
    this.fetchPrompt();
  } else {
    this.sendPrompt();
  }

  }


  sendPrompt(){
    const request = new Request();
    const promptBody = {
      prompt: this.state.prompt,
      customPrompt: this.state.custom
    }

    request.post('/api/prompts', promptBody)
    .then(() => this.sendInstance())
  }

onCustomSubmit(customPrompt){
  this.setState({prompt: customPrompt, custom: true});
}

  sendInstance(){
    let instanceBody;

    const request = new Request();

    // let date = new Date("10-19-2019");
    // //,dateCreated: date

    request.get('/api/prompts/prompt/last')
    .then(data => this.setState({promptInstance: data}))
    .then(() => instanceBody = {prompt: "http://localhost:8080/api/prompts/" + this.state.promptInstance.id,
    prompt_time: this.state.time,
    dateCreated: Date.now()
    })
    .then(() => {
      const request = new Request();
      request.post('/api/creativeInstances', instanceBody)
    })


  }



  changeTimesUp(value){
    this.setState({timesUp: value});
  }



  //handleRespark(){}
  //Get fetches old INSTANCE
  //.Then {prompt: prompt.adjective + prompt.noun , time: instance.time} - prepopulating time select
  //.Then POST new INSTANCE - old prompt with NEW time
  //.Then display prompt and timer page.

  //add function to custom prompt receiving redirect to options page

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>

            <Route exact path="/" render={(props) => {
              return <StartPage />
            }}/>

            <Route exact path="/spark" render={(props) => {
              return <PromptPage time={this.state.time}
              prompt={this.state.prompt}
              timesup={this.state.timesUp}
              changeTimesUp={this.changeTimesUp} />
            }}/>

            <Route exact path="/options" render={(props) => {
              return <OptionsForm onSubmit={this.handleOptions}/>
            }}/>

            <Route exact path="/custom" render={(props) => {
              return <CustomPromptForm onCustomSubmit={this.onCustomSubmit} />
            }}/>


          </Switch>

        </Fragment>
      </Router>
    )
  }
}

export default PromptContainer;
