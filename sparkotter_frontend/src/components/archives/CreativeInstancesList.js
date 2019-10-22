import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import CreativeInstance from './CreativeInstance';


const CreativeInstancesList = (props) => {

  if (props.archiveItems.length === 0){
    return (<p>Loading...</p>)
  }

  const creativeInstances = props.archiveItems.map((instance, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <CreativeInstance creativeInstance={instance} />
      </div>
      </li>
    )
  })


  let selectedInstances = [];
  if (props.selectedItems.length > 0) {
  selectedInstances =  props.selectedItems.map((instance, index) => {
    return (<li key={index} className="component-item">
    <div className="component">
    <CreativeInstance creativeInstance={instance} />
    </div>
    </li>)
  }) } else if (props.selectedItems.length === 0){
  selectedInstances = null;
    return selectedInstances;
  }



  return (
    <Fragment>
    <ul className="component-list">
    {props.selectedItems.length ? (selectedInstances) : (creativeInstances)}
    </ul>
    </Fragment>
  )
}
export default CreativeInstancesList;
