//"/sparkive"
//state: savedSparks
// compDidMount

import React,{Component,Fragment} from 'react';
// import ArchiveItem from '../../components/archives/ArchiveItem';
import ArchiveList from '../../components/archives/ArchiveList';
// import ArchiveSelect from '../../components/archives/ArchiveSelect';



class ArchiveContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      archiveItems: ["angel drop", "sparky apple"],
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
    <ArchiveList archiveItems={
      this.state.archiveItems
    }/>
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
