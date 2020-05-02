import React, { Component } from 'react';

const name = 'Roland';
const Spaner = function () {
  return <span className='grey-text'>hello.js</span>;
};
const Header = React.createElement(
  // No JSX
  'h4',
  {
    className: 'margin-top-0',
    style: {
      fontFamily: 'monospace'
    }
  },
  <>
    OK {name}, this <Spaner /> show you some magic.
  </>
);

class Greeting extends Component {
  countButton = (<button onClick={this.handleClick}>Click me</button>);

  handleClick(event) {
    console.log('called handleClick() function:', event);
  }

  render() {
    return (
      <>
        <h2 className='red-text' style={{ marginBottom: '0px' }}>
          Hi {name}!
        </h2>
        {Header}
        <div
          style={{
            fontFamily: 'monospace'
          }}>
          Button from <Spaner /> {this.countButton}
        </div>
      </>
    );
  }
}

export default Greeting;
