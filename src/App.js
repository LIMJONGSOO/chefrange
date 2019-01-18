import React, { Component } from 'react';
import { Footer } from './components';
import { Header } from './components';
import { Main } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Main/>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
