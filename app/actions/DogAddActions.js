import alt from '../alt';
import request from 'superagent';

class DogAddActions {
  constructor() {
    this.generateActions('addDogSuccess');
  }

  addDog(dog) {
    request
      .post('/api/dog/add')
      .send({ dog: dog })
      .end((err, response) => {
        this.actions.addDogSuccess(response);
      })
  }

}

export default alt.createActions(DogAddActions);
