import alt from '../alt';
import request from 'superagent';

class DogListActions {
  constructor() {
    this.generateActions('getDogsSuccess');
  }

  getDogs() {
    request
      .get('/api/dog/list')
      .end((err, response) => {
        this.actions.getDogsSuccess(response.body);
      });
  }

}

export default alt.createActions(DogListActions);
