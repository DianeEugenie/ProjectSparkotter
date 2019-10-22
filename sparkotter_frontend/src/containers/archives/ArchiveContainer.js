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
      archiveItems: [],
      selectedItems: [],
      selected: false
    }

    this.handleDate = this.handleDate.bind(this);
  }


  componentDidMount(){
    const request = new Request();
    request.get('/api/creativeInstances')
    .then((data) => {
      this.setState({archiveItems: data._embedded.creativeInstances})
    })
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
//check if for each selectedItems the first 10 characters match
//return it into an array and assign it to selectedItems
    }


    this.setState({selected: selected})



  }

  render(){
    return (
      <Fragment>
      <h2>Sparkive</h2>
      <ArchiveSelect selections={this.state.archiveItems} handleDate={this.handleDate}/>
      <CreativeInstancesList archiveItems={this.state.archiveItems} selectedItems={this.state.selectedItems} isSelected={this.state.selected}/>
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
