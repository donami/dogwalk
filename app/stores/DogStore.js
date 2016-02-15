import alt from '../alt';
import DogActions from '../actions/DogActions';

class DogStore {
  constructor() {
    this.bindActions(DogActions);
    this.dog = [];
  }

  onGetDogSuccess(data) {
    this.dog = data;
  }
}

export default alt.createStore(DogStore);
