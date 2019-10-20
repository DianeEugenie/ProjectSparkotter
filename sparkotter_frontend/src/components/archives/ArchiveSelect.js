import React, {Component} from 'react';
import ArchiveItem from './ArchiveItem.js';


class ArchiveSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      archiveItems: []
    }

  }

  // findArchiveLink() {
  //   const foundArchive = this.state.archiveItems.find((archive) => {
  //     return  archive.date === this.props.archive.date;
  //   })
  //
  //   return foundArchive._links.self.href;
  // }


  render(){
    const archiveOptions = this.props.selections.map((archiveItem, index ) => {
      return <option key={index} value={archiveItem}>{archiveItem.date}</option>
    })

    return (<div>
      <select name="archiveItem">
      {archiveOptions}
      </select>
      </div>)
    }
  }



  
  export default ArchiveSelect;
