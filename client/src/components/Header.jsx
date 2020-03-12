import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
      </div>
    );
  }
}

export default Header;