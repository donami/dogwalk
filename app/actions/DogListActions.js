import alt from '../alt';
import request from 'superagent';

class DogListActions {
  constructor() {
    this.generateActions(
      'getDogsSuccess',
      'removeDogSuccess'
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

}

export default alt.createActions(DogListActions);
