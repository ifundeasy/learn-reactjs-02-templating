import React, { Component } from 'react';
import Greeting from './hello';

class App extends Component {
  render() {
    return (
      <>
        <h1
          style={{
            width: '100%',
            backgroundColor: '#e8e8e8',
            marginTop: '0px'
          }}>
          React App
        </h1>
        <Greeting />
      </>
    );
  }
}

export default App;
