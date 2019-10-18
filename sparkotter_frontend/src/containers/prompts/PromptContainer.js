// "/"
//state: randomPrompt
//function: handle Options()
//Router / TimesUpPage - PromptPage StartPage
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TimesUpPage from '../../components/time_elements/TimesUpPage';
import PromptPage from '../../components/prompts/PromptPage';
import StartPage from '../../components/prompts/StartPage';

class PromptContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      prompt: null,

    }

    //this.handleOptions = this.handleOptions.bind(this);
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" render={(props) => {
              return <StartPage />
            }} />

            <Route exact path="/spark" render={(props) => {
              return <PromptPage />
            }}/>

            <Route exact path="/spark/timesup" render={(props) => {
              return <TimesUpPage />
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default PromptContainer;
