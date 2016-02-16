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

    let dog = {
      name: this.state.name,
      race: this.state.race,
      description: this.state.description,
      born: this.state.born
    }

    DogAddActions.addDog(dog);
  }

  _handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  _handleBornChange(event) {
    this.setState({born: event.target.value});
  }

  _handleRaceChange(event) {
    this.setState({race: event.target.value});
  }

  _handleDescripionChange(event) {
    this.setState({description: event.target.value});
  }

  render () {
    return (
      <div>
        <h1>Add Dog</h1>
        <form onSubmit={this._addDog.bind(this)}>

          <div className="form-group">
            <label htmlFor="fName">Name</label>
            <input type="text"
              className="form-control"
              onChange={this._handleNameChange.bind(this)}
              value={this.state.name} />
          </div>

          <div className="form-group">
            <label htmlFor="fDate">Date of birth</label>
            <input type="text"
              className="form-control"
              onChange={this._handleBornChange.bind(this)}
              value={this.state.born} />
          </div>

          <div className="form-group">
            <label htmlFor="fRace">Race</label>
            <input type="text"
              className="form-control"
              onChange={this._handleRaceChange.bind(this)}
              value={this.state.race} />
          </div>

          <div className="form-group">
            <label htmlFor="fDescription">Description</label>
            <input type="text"
              className="form-control"
              onChange={this._handleDescripionChange.bind(this)}
              value={this.state.description} />
          </div>


          <button type="submit">Add</button>
      </form>
      </div>
    );
  }
}

export default DogAdd;
