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
      <div className="row" id="dogContainer">
        <div className="col-md-4">
          <img src="https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11017557_640180799445071_263045380_n.jpg" alt="Image"/>
        </div>

        <div className="col-md-8">
          <h1>Hi, I'm {this.state.dog.name}</h1>

          <table className="table table-striped">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{this.state.dog.name}</td>
              </tr>
              <tr>
                <td>Born:</td>
                <td>{this.state.dog.born}</td>
              </tr>
              <tr>
                <td>Race</td>
                <td>{this.state.dog.race}</td>
              </tr>
            </tbody>
          </table>

          <div className="description">
            <h2>Get to know me!</h2>
            <p>{this.state.dog.description}</p>
          </div>

          <div className="requestArea">
            <h3>Interested?</h3>
            <button type="button" className="btn btn-success">Request walk</button>

            <p>Click the button to inform the owners of your interest.</p>
          </div>

        </div>
      </div>
    );
  }
}

export default Dog;
