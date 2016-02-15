import React, { PropTypes } from 'react'
import DogActions from '../../actions/DogActions';
import DogStore from '../../stores/DogStore';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = DogStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DogStore.listen(this.onChange);
    DogActions.getDog(this.props.params.id);
  }

  componentWillUnmount() {
    DogStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render () {
    return (
      <div>
        <h1>{this.state.dog.name}</h1>

      </div>
    );
  }
}

export default Dog;
