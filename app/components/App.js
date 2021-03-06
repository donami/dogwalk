import React, { PropTypes } from 'react'
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
