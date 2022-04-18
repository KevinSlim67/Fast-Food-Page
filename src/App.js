import './App.scss';
import React, { Component } from 'react';
import Header from './components/header';
import MainPage from './components/main_page/main_page';
import NavBar from './components/navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <MainPage />
      </div>
    );
  }
}



export default App;
