// "/"
//state: randomPrompt
//function: handle Options()
//Router / TimesUpPage - PromptPage StartPage
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TimesUpPage from '../../components/time_elements/TimesUpPage';
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
      promptInstance: null
    }

    this.handleOptions = this.handleOptions.bind(this);
    this.sendPrompt = this.sendPrompt.bind(this);
    this.sendInstance = this.sendInstance.bind(this);
    this.onCustomSubmit = this.onCustomSubmit.bind(this);
  }



  fetchPrompt(){
    const request = new Request();

    const min = 1;
    const adjMax = 87;
    const nounMax = 300;
    const randAdjIndex = Math.floor((min + Math.random() * (adjMax - min)));
    const randNounIndex = Math.floor((min + Math.random() * (nounMax - min)));


    const adjPromise = request.get("/api/adjectiveWords/" + randAdjIndex);
    const nounPromise = request.get("/api/nounWords/" + randNounIndex);

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
    }

  }


  sendPrompt(){
    const request = new Request();
    const promptBody = {
      prompt: this.state.prompt
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
              return <PromptPage time={this.state.time} prompt={this.state.prompt} />
            }}/>

            <Route exact path="/spark/timesup" render={(props) => {
              return <TimesUpPage />
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
