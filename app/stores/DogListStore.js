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

  onSaveDogSuccess(data) {
    toastr.success('Dog saved successfully');

    const dogs = this.dogs.map(dog => {
      if(dog._id === data._id) {
        return Object.assign({}, dog, data);
      }

      return dog;
    });

    this.dogs = dogs;
  }
}

export default alt.createStore(DogListStore);
