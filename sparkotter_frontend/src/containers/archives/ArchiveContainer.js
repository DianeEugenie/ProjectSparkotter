//"/sparkive"
//state: savedSparks
// compDidMount

import React,{Component,Fragment} from 'react';
import Prompt from '../../components/archives/Prompt'
import CreativeInstancesList from '../../components/archives/CreativeInstancesList';
import ArchiveSelect from '../../components/archives/ArchiveSelect';
import CreativeInstance from '../../components/archives/CreativeInstance';
import Request from '../../helpers/Request';



class ArchiveContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      archiveItems: []
    }
  }


  componentDidMount(){
    const request = new Request();
    request.get('/api/creativeInstances')
    .then((data) => {
      console.log(data);
      this.setState({archiveItems: data._embedded.creativeInstances})
    })
  }
  //
  // findArchiveItemById(id){
  //   return this.state.archiveItems.find((archiveItem) => {
  //     return savedSpark.id === parseInt(id);
  //   });
  // }

  render(){
    return (
      <Fragment>
      <h2>Sparkive</h2>
      <ArchiveSelect selections={this.state.archiveItems}/>
      <CreativeInstancesList archiveItems={this.state.archiveItems}/>
      </Fragment>
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
