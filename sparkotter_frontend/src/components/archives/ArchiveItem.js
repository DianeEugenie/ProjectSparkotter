import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const ArchiveItem = (props) => {
  return (
    <p>{props.archiveItem.prompt}</p>
  )
}
export default ArchiveItem;
