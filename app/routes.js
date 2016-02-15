import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Dog from './components/Dog/Dog';
import DogAdd from './components/Dog/DogAdd';
import DogList from './components/Dog/DogList';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/dog/add' component={DogAdd} />
    <Route path='/dog/:id' component={Dog} />
    <Route path='/dogs' component={DogList} />
  </Route>
);
