import React, {Component} from 'react';
import moment from 'moment';

const ArchiveSelect = (props) => {

  const handleSelect = () => {

  }

  const archiveOptions = props.selections.map((archiveItem, index ) => {
    return <option key={index} value={archiveItem}>{moment(archiveItem.dateCreated).local().format('LL')}</option>
  })

  return (<div>
    <select name="archiveItem" onChange={handleSelect}>
    {archiveOptions}
    </select>
    </div>)

}


export default ArchiveSelect;
