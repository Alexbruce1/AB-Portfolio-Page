import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;