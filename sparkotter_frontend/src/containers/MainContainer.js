//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Component, Fragment} from 'react';
import PromptContainer from './prompts/PromptContainer';
import ArchiveContainer from './archives/ArchiveContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from '../components/aboutus/AboutUs';


class MainContainer extends Component{
  constructor(props){
  super(props);
  this.state = {
      selectedTime: null,
    }


  }

  render(){

    return (
      <Router>
      <Fragment>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <PromptContainer/>
              }}/>
              <Route exact path="/aboutus" render={(props) => {
                return <AboutUs/>
              }} />
              <Route exact path="/sparkive" component={ArchiveContainer}/>
        </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
