import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from './components/Main';
import CalendarContainer from './containers/CalendarContainer';
import ModalContainer from './containers/ModalContainer';

import store from './store';
import { fetchEventsFromServer } from './action-creators';


function loadEvents() {
  console.log('loading events, Buddy!');
  const fetchEventsThunk = fetchEventsFromServer();
  store.dispatch(fetchEventsThunk); 
}

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory} >
      <Route path='/' component={Main} >
        <Route path='/calendar' component={CalendarContainer} onEnter={loadEvents} >
          <Route path='/showModal' component={ModalContainer} />
        </Route> 
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);