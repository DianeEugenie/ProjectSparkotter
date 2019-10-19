import React from 'react';
import ArchiveItem from './ArchiveItem.js';


const ArchiveList = (props) => {

  if (props.archiveItems.length === 0){
    return (<p>Loading...</p>)
  }

  const archiveItems = props.archiveItems.map((archiveItem, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <ArchiveItem archiveItem={archiveItem} />
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {archiveItems}
    </ul>
  )
}
export default ArchiveList;
