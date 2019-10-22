import React from 'react';
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

  return (
    <ul className="component-list">
    {creativeInstances}
    </ul>
  )
}
export default CreativeInstancesList;
