import alt from '../alt';
import DogListActions from '../actions/DogListActions';

class DogListStore {
  constructor() {
    this.bindActions(DogListActions);
    this.dogs = [];
  }

  onGetDogsSuccess(data) {
    this.dogs = data;
  }

}

export default alt.createStore(DogListStore);
