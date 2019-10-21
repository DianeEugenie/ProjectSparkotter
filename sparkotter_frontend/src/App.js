import React from 'react';
import MainContainer from './containers/MainContainer';
import Footer from './navigations/Footer';
import Header from './navigations/Header'; 
import './App.css';

function App() {
  return (
    <div>
    <h2>Sparkotter</h2>
    <h3>Ignite Your Passion For Creativity</h3>
    <MainContainer />
    <Footer />
    <Header />
  </div>
  );
}

export default App;
