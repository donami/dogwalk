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

  onRemoveDogSuccess(dogId) {
    let dogs = this.dogs.filter((dog) => {
      return dog._id !== dogId;
    });

    this.dogs = dogs;
    toastr.success('Dog removed successfully');
  }

}

export default alt.createStore(DogListStore);
