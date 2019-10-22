// <img timesup />
//< Link to= "/options" & "/sparkive"
import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Request from '../../helpers/Request';

const TimesUpPage = (props) => {
  const optionsUrl = '/options';
  const sparkiveUrl = '/sparkive';

  const handleTimesUp = () => {
    props.changeTimesUp(false);
  }

  const tweetText = "https://twitter.com/intent/tweet?text=Sparkotter Inspired Me With " + props.prompt + "";





  return (
    <Fragment>
    <img className="times-up-logo" src="https://media.discordapp.net/attachments/318372572775317505/635594327724392458/timesup.png" />
    <Link to={optionsUrl}><button className="start-button" onClick={handleTimesUp}>New Spark</button></Link>
    <a href={sparkiveUrl}><button className="start-button" onClick={handleTimesUp}>Your Sparkive</button></a>
    <a className="twitter-share-button" href={tweetText}>
    Tweet</a>

    </Fragment>
  );
}

export default TimesUpPage;
