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

class PromptContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: "Dropped Angel",
      time: null
    }

    this.handleOptions = this.handleOptions.bind(this);
  }

  handleOptions(minutes){
    this.setState({time: minutes})
  }

  //FETCH sequence
  // Get fetch adjective
  // Get fetch noun
  // .Then Post adjective/noun PROMPT
  // .Then {prompt: adj, noun}
  // .Then Post new INSTANCE (send prompt and time)
  // .Then display PROMPT and timer page.

  //handleRespark(){}
  //Get fetches old INSTANCE
  //.Then {prompt: prompt.adjective + prompt.noun , time: instance.time} - prepopulating time select
  //.Then POST new INSTANCE - old prompt with NEW time
  //.Then display prompt and timer page.



  render(){
    return (
      <Router>
        <Fragment>
          <Switch>

            <Route exact path="/" render={(props) => {
              return <StartPage />
            }} />

            <Route exact path="/spark" render={(props) => {
              return <PromptPage time={this.state.time} prompt={this.state.prompt} />
            }}/>

            <Route exact path="/spark/timesup" render={(props) => {
              return <TimesUpPage />
            }}/>


            <Route exact path="/options" render={(props) => {
              return <OptionsForm onSubmit={this.handleOptions}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default PromptContainer;
