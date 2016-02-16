import React, { PropTypes } from 'react'
import DogListActions from '../../actions/DogListActions';
import DogListStore from '../../stores/DogListStore';
import { Link } from 'react-router';

class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = DogListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DogListStore.listen(this.onChange);
    DogListActions.getDogs();
  }

  componentWillUnmount() {
    DogListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  _handleRemove(dogId) {
    DogListActions.removeDog(dogId);
  }

  render () {

    let dogList = this.state.dogs.map((dog, index) => {
      return (
        <tr key={dog._id}>
          <td><Link to={"dog/" + dog._id}>{dog.name}</Link></td>
          <td>Edit</td>
          <td><span onClick={this._handleRemove.bind(this, dog._id)}>Remove</span></td>
        </tr>
      );
    });

    return (
      <div>
        <h1>List dog</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Dog</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {dogList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DogList;
