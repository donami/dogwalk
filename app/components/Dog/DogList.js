import React, { PropTypes } from 'react'
import DogListActions from '../../actions/DogListActions';
import DogListStore from '../../stores/DogListStore';
import DogListItem from '../Dog/DogListItem';

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

  _handleSave(dog) {
    DogListActions.saveDog(dog);
  }


  render () {

    let dogList = this.state.dogs.map((dog, index) => {
      return (
        <DogListItem
          key={dog._id}
          data={dog}
          handleRemove={this._handleRemove.bind(this, dog._id)}
          handleSave={this._handleSave.bind(this)}/>
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
