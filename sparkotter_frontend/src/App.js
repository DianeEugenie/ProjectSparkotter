import React from 'react';
import MainContainer from './containers/MainContainer';
import Footer from './navigations/Footer';
import Header from './navigations/Header';
import './App.css';

function App() {
  return (
    <div className="page-layout">

    <Header />
    <MainContainer />
    <Footer />

  </div>
  );
}

export default App;
