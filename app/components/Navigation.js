import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <Link to="/dogs">List</Link>
        <Link to="/dog/add" onClick={Link.handleClick}>Add dog</Link>
      </div>
    );
  }
}

export default Navigation;
