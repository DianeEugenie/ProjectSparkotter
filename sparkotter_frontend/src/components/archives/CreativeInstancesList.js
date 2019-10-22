import React, {Fragment} from 'react';
import CreativeInstance from './CreativeInstance';


const CreativeInstancesList = (props) => {

  if (props.archiveItems.length === 0){
    return (<p>Loading...</p>)
  }

  const creativeInstances = props.archiveItems.map((instance, index) => {
    return (
      <li key={index} className="component-item">
      <div className="component">
      <CreativeInstance creativeInstance={instance} getResparkPrompt={props.getResparkPrompt}/>
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
  }) }



  return (
    <Fragment>
    <ul className="component-list">

    {props.isSelected ? (selectedInstances) : (creativeInstances)}
    </ul>
    </Fragment>
  )
}
export default CreativeInstancesList;
