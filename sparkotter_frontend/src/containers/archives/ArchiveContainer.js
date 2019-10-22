//"/sparkive"
//state: savedSparks
// compDidMount

import React,{Component,Fragment} from 'react';
import CreativeInstancesList from '../../components/archives/CreativeInstancesList';
import ArchiveSelect from '../../components/archives/ArchiveSelect';
import Request from '../../helpers/Request';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PromptPage from "../../components/prompts/PromptPage";
import ResparkOptionsForm from "../../components/time_elements/ResparkOptionsForm";



class ArchiveContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      archiveItems: [],
      prompt: "",
      time: null,
      timesUp: false,
      resparkTime: null,
      resparkID: null
    };
    this.handleResparkOptions = this.handleResparkOptions.bind(this);
    this.changeTimesUp = this.changeTimesUp.bind(this);
    this.sendResparkInstance = this.sendResparkInstance.bind(this);
    this.getResparkPrompt = this.getResparkPrompt.bind(this);
  }


  componentDidMount(){
    const request = new Request();
    request.get('/api/creativeInstances')
    .then((data) => {
      console.log(data);
      this.setState({archiveItems: data._embedded.creativeInstances})
    })
  }

  handleResparkOptions(minutes){
    if (minutes === 'null') {
      this.setState({time: null});
    } else {
      this.setState({time: minutes});
    }
    this.sendResparkInstance();
  }

  sendResparkInstance(){
    const instanceBody = {prompt: "http://localhost:8080/api/prompts/" + this.state.resparkID,
    prompt_time: this.state.time,
    dateCreated: Date.now()
    }

    const request = new Request();
    request.post('/api/creativeInstances', instanceBody);

  }

  changeTimesUp(value){
    this.setState({timesUp: value});
  }
  //
  // findArchiveItemById(id){
  //   return this.state.archiveItems.find((archiveItem) => {
  //     return savedSpark.id === parseInt(id);
  //   });
  // }

  getResparkPrompt(prompt, time){
    this.setState({prompt: prompt.prompt, resparkTime: time, resparkID: prompt.id})
  }
//pass down time to resparkoptionsform
  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/sparkive" render={(props) => {
              return(
                <Fragment>
                  <h2>Sparkive</h2>
                  <ArchiveSelect selections={this.state.archiveItems}/>
                  <CreativeInstancesList archiveItems={this.state.archiveItems} getResparkPrompt={this.getResparkPrompt}/>
                </Fragment>)
              }}/>

            <Route exact path="/respark" render={(props) => {
              return <PromptPage time={this.state.time}
              prompt={this.state.prompt}
              timesup={this.state.timesUp}
              changeTimesUp={this.changeTimesUp} />
            }}/>

            <Route exact path="/resparkoptions" render={(props) => {
              return <ResparkOptionsForm onSubmit={this.handleResparkOptions}/>
            }}/>
            </Switch>
          </Fragment>
      </Router>

    )
  }

}

export default ArchiveContainer;

// <Router>
//   <Fragment>
//     <Switch>
//
//
//     </Switch>
//   </Fragment>
//
// </Router>

// fetch display prompt, time , date and

// <ArchiveList archiveItems={this.state.archiveItems}/>
// <ArchiveSelect selections={this.state.archiveItems}/>
