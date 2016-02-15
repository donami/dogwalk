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

  render () {

    let dogList = this.state.dogs.map((dog, index) => {
      return (
        <div key={dog._id}>
          <Link to={"dog/" + dog._id}>{dog.name}</Link>
        </div>
      );
    });

    return (
      <div>
        <h1>List dog</h1>
        {dogList}
      </div>
    );
  }
}

export default DogList;
