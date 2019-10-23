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
      resparkID: null,
      selectedItems: [],
      selected: false
    };
    this.handleResparkOptions = this.handleResparkOptions.bind(this);
    this.changeTimesUp = this.changeTimesUp.bind(this);
    this.sendResparkInstance = this.sendResparkInstance.bind(this);
    this.getResparkPrompt = this.getResparkPrompt.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }


  componentDidMount(){
    const request = new Request();
    request.get('/api/creativeInstances/all/descending')
    .then((data) => {
      console.log(data);
      this.setState({archiveItems: data})
    })
  }

  handleResparkOptions(minutes){
    if (minutes === 'null') {
      this.setState({time: null});
    } else {
      this.setState({time: minutes});
    }

    setTimeout(this.sendResparkInstance, 1000)
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

  handleDate(date, selected){
  if (date) {
    const selectedItems = this.state.archiveItems.filter(item => item.dateCreated.substring(0,10) === date)
    this.setState({selectedItems: selectedItems})
  }
  this.setState({selected: selected})
  }


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
                  <h2>Your Sparkive</h2>
                  <ArchiveSelect selections={this.state.archiveItems} handleDate={this.handleDate}/>
                  <CreativeInstancesList archiveItems={this.state.archiveItems} getResparkPrompt={this.getResparkPrompt} selectedItems={this.state.selectedItems} isSelected={this.state.selected}/>
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
