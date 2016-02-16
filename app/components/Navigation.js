import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class Navigation extends React.Component {
  render () {
    return (
      <nav className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dogs">List</Link></li>
          <li><Link to="/dog/add" onClick={Link.handleClick}>Add dog</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
