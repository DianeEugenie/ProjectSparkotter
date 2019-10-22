import React from 'react';



const ArchiveSelect = (props) => {



  // render(){
    const archiveOptions = props.selections.map((archiveItem, index ) => {
      return <option key={index} value={archiveItem}>{archiveItem.dateCreated}</option>
    })

    return (<div>
      <select name="archiveItem">
      {archiveOptions}
      </select>
      </div>)
    }





  export default ArchiveSelect;
