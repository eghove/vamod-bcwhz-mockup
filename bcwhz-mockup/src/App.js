import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Footer></Footer>
        
      </div>
    );
  }
}

export default App;
