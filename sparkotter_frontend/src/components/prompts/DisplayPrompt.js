// prop: randomPrompt
import React from 'react';

const DisplayPrompt = (props) => {

  if (!prompt) {
    return "Sparky is fetching your prompt.."
  }

  return(
    <p className="prompt">{props.prompt}</p>
  );
}

export default DisplayPrompt;
