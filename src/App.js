import React, { Component } from 'react';
import { Footer } from './components';
import { Header } from './components';
import { Main } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
