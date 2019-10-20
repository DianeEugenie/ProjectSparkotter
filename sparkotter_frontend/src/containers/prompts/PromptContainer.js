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
    // window.location = "/spark"
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
