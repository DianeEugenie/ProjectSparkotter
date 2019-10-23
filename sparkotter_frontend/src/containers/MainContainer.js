//Router Switch
// "/" "/aboutus" "/sparkive"


import React, {Fragment} from 'react';
import PromptContainer from './prompts/PromptContainer';
import ArchiveContainer from './archives/ArchiveContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from '../components/aboutus/AboutUs';


const MainContainer = ()  =>{

  return (
    <Router>
      <Fragment>
        <div className="main-layout">
        <PromptContainer />

        <Switch>
          <Route exact path="/aboutus" component={AboutUs}/>
          <Route exact path="/sparkive" component={ArchiveContainer}/>
        </Switch>
        </div>
      </Fragment>
    </Router>
  );

}

export default MainContainer;
