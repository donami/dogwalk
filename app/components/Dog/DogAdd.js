import React, { PropTypes } from 'react'
import DogAddActions from '../../actions/DogAddActions';
import DogAddStore from '../../stores/DogAddStore';

class DogAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = DogAddStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DogAddStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DogAddStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  _addDog(e) {
    e.preventDefault();

    DogAddActions.addDog(this.state.dog);
  }

  _handleChange(event) {
    this.setState({
      dog: {
        name: event.target.value
      }
    });
  }

  render () {
    return (
      <div>
        <h1>Add Dog</h1>
        {this.state.dog.name}
        <form onSubmit={this._addDog.bind(this)}>
          <input type="text"
            onChange={this._handleChange.bind(this)}
            value={this.state.dog.name} />

          <button type="submit">Add</button>
      </form>
      </div>
    );
  }
}

export default DogAdd;
