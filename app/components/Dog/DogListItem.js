import React, { PropTypes } from 'react'
import { Link } from 'react-router';


class DogListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }


  _handleToggleEdit() {
    this.setState({editing: !this.state.editing});
  }

  _handleSave(e) {
    e.preventDefault();

    var dog = {
      _id: this.props.data._id,
      name: this.refs.name.value,
      race: this.refs.race.value,
      description: this.refs.description.value,
      born: this.refs.born.value
    };

    this.props.handleSave(dog);
    this.setState({editing: false});
  }

  renderEdit() {
    return (
      <tr>
        <td colSpan="3">
          <form onSubmit={this._handleSave.bind(this)}>
            <div className="form-group">
              <label htmlFor="fName">Name</label>
              <input type="text" className="form-control" ref="name" id="fName" defaultValue={this.props.data.name} placeholder="Name"/>
            </div>
            <div className="form-group">
              <label htmlFor="fRace">Race</label>
              <input type="text" className="form-control" ref="race" id="fRace" defaultValue={this.props.data.race} placeholder="Race"/>
            </div>
            <div className="form-group">
              <label htmlFor="fBorn">Born</label>
              <input type="text" className="form-control" ref="born" id="fBorn" defaultValue={this.props.data.born} placeholder="Born"/>
            </div>
            <div className="form-group">
              <label htmlFor="fDescription"></label>
              <input type="text" className="form-control" ref="description" id="fDescription" defaultValue={this.props.data.description} placeholder="Description"/>
            </div>

            <div className="form-actions">
              <button className="btn btn-success" type="submit">Save</button>
              <button className="btn btn-danger" onClick={this._handleToggleEdit.bind(this)}>Cancel</button>
            </div>
          </form>
        </td>
      </tr>
    );
  }

  renderView() {
    return (
      <tr>
        <td><Link to={"dog/" + this.props.data._id}>{this.props.data.name}</Link></td>
        <td>
          <button className="btn btn-xs btn-success" type="button" onClick={this._handleToggleEdit.bind(this)}>Edit</button>
        </td>
        <td>
          <button className="btn btn-xs btn-danger" onClick={this.props.handleRemove}>Remove</button>
        </td>
      </tr>
    );
  }

  render () {
    return this.state.editing? this.renderEdit() : this.renderView();
  }
}

export default DogListItem;
