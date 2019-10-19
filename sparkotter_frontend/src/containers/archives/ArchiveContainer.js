//"/sparkive"
//state: savedSparks
// compDidMount

import React,{Component,Fragment} from 'react';
import ArchiveItem from '../../components/archives/ArchiveItem';
import ArchiveList from '../../components/archives/ArchiveList';
import ArchiveSelect from '../../components/archives/ArchiveSelect';



class ArchiveContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      archiveItems: [{prompt:"angel drop", date: "Tuesday"}, {prompt:"sparky apple", date: "Thursday"}]
    }
  }


  // componentDidMount(){
  //   const request = new Request();
  //
  //   request.get('/savedSparks')
  //   .then((data) => {
  //     this.setState({archiveItems: data._embedded.archiveItems})
  //   })
  // }
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
    <ArchiveList archiveItems={this.state.archiveItems}/>
    <ArchiveSelect selections={this.state.archiveItems}/>
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
