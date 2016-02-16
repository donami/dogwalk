import alt from '../alt';
import DogAddActions from '../actions/DogAddActions';

class DogAddStore {
  constructor() {
    this.bindActions(DogAddActions);
    this.name = '';
    this.race = '';
    this.description = '';
    this.born = '';
  }

  onAddDogSuccess(data) {
    this.name = '';
    this.race = '';
    this.description = '';
    this.born = '';
    toastr.success("Dog added successfully");
  }

}

export default alt.createStore(DogAddStore);
