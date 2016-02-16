import alt from '../alt';
import request from 'superagent';

class DogListActions {
  constructor() {
    this.generateActions(
      'getDogsSuccess',
      'removeDogSuccess',
      'saveDogSuccess'
    );
  }

  getDogs() {
    request
      .get('/api/dog/list')
      .end((err, response) => {
        this.actions.getDogsSuccess(response.body);
      });
  }

  removeDog(dogId) {
    request
      .delete('/api/dog/' + dogId)
      .end((err, response) => {
        this.actions.removeDogSuccess(dogId);
      });
  }

  saveDog(dog) {
    request
      .put('/api/dog/' + dog._id)
      .send({dog: dog})
      .end((err, response) => {
        this.actions.saveDogSuccess(dog);
      });
  }

}

export default alt.createActions(DogListActions);
