import alt from '../alt';
import request from 'superagent';

class DogActions {
  constructor() {
    this.generateActions('getDogSuccess');
  }

  getDog(id) {
    request
      .get('/api/dog/' + id)
      .end((err, response) => {
        this.actions.getDogSuccess(response.body);
      });
  }
}

export default alt.createActions(DogActions);
