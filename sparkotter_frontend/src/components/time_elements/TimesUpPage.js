// <img timesup />
//< Link to= "/options" & "/sparkive"
import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


const TimesUpPage = (props) => {
  const optionsUrl = '/options';
  const sparkiveUrl = '/sparkive';

  const handleTimesUp = () => {
    props.changeTimesUp(false);
  }

  const tweetText = "https://twitter.com/intent/tweet?text=Sparkotter Inspired Me With "
   + props.prompt
   + "&hashtags=Sparkotter%2CGetCreative";

  return (
    <Fragment>
    <img alt="Sparky celebrating you are done" className="times-up-logo" src="https://media.discordapp.net/attachments/318372572775317505/635594327724392458/timesup.png" />
    <Link to={optionsUrl}><button className="start-button" onClick={handleTimesUp}>New Spark</button></Link>
    <a href={sparkiveUrl}><button className="start-button" onClick={handleTimesUp}>Your Sparkive</button></a>
    <a className="twitter-share-button" href={tweetText} target="_blank" rel="noopener noreferrer">
    Tweet</a>

    </Fragment>
  );
}

export default TimesUpPage;
