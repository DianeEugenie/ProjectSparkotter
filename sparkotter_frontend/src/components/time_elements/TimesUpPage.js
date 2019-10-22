// <img timesup />
//< Link to= "/options" & "/sparkive"
import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helpers/Request';

const TimesUpPage = (props) => {
  const optionsUrl = '/options';
  const sparkiveUrl = '/sparkive';
  let [twitterUrl, setTwitterUrl] = useState('');

  useEffect(() => {
    const request = new Request();
    request.get('/api/prompts/prompt/last')
      .then((data) => {
        twitterUrl = 'https://twitter.com/intent/tweet?text=' + data.prompt;
      })
  })

  // const request = new Request();
  //




  return (
    <Fragment>
    <img class="times-up-logo" src="https://media.discordapp.net/attachments/318372572775317505/635594327724392458/timesup.png" />
    <p>This is the Times Up of the Prompt Container</p>
    <p>Which lets you know the time is up!</p>
    <Link to={optionsUrl}><button className="start-button">New Spark</button></Link>
    <a href={sparkiveUrl}><button className="start-button">Your Sparkive</button></a>
    <a class="twitter-share-button" href={twitterUrl}>
    Tweet</a>
    {console.log(twitterUrl)}
    </Fragment>
  );
}

export default TimesUpPage;
