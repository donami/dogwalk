import alt from '../alt';
import DogAddActions from '../actions/DogAddActions';

class DogAddStore {
  constructor() {
    this.bindActions(DogAddActions);
    this.dog = [];
  }

  onAddDogSuccess(data) {
    this.dog = [];
    toastr.success("Dog added successfully");
  }

}

export default alt.createStore(DogAddStore);
