import React, { Component } from 'react';
import { Footer } from './components';
import { Body } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
