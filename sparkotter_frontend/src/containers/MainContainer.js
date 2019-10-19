//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Component, Fragment} from 'react';
import PromptContainer from './prompts/PromptContainer';
import ArchiveContainer from './archives/ArchiveContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 


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
        <PromptContainer />
          <ArchiveContainer />
            <Switch>
              <Route exact path="/" />
              <Route  exact path="/aboutus" />
              <Route  exact path="/sparkive" component={ArchiveContainer}/>
        </Switch>
      </Fragment>
      </Router>
    );
  }
}

export default MainContainer;
