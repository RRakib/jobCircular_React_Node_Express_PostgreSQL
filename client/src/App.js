import './App.css';
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
