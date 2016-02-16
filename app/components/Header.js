import React, { PropTypes } from 'react'
import Navigation from './Navigation';

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Dogzee</h1>
        <Navigation />
      </div>
    );
  }
}

export default Header;
