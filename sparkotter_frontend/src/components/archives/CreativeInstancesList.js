import React, {Fragment} from 'react';
import CreativeInstance from './CreativeInstance';


const CreativeInstancesList = (props) => {

  if (props.archiveItems.length === 0){
    return (<p>Loading...</p>)
  }

  const creativeInstances = props.archiveItems.map((instance, index) => {
    return (
      <div key={index} className="component-item">
        <CreativeInstance creativeInstance={instance} getResparkPrompt={props.getResparkPrompt}/>
      </div>
    )
  })


  let selectedInstances = [];

  if (props.selectedItems.length > 0) {

  selectedInstances =  props.selectedItems.map((instance, index) => {
    return (
      <div key={index} className="component-item">
          <CreativeInstance creativeInstance={instance} />
      </div>
    )
  }) }



  return (
    <Fragment>
      <div className="sparkive-list">
        {props.isSelected ? (selectedInstances) : (creativeInstances)}
      </div>
    </Fragment>
  )
}
export default CreativeInstancesList;
