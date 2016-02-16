import React, { PropTypes } from 'react'
import Navigation from './Navigation';
import { Link } from 'react-router';

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1><Link to="/">Dogzee</Link></h1>
        <Navigation />
      </div>
    );
  }
}

export default Header;
