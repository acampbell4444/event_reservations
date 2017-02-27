import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from './components/Main';
import UserInfoForm from './components/UserInfoForm';
import DateAndProductChoice from './components/DateAndProductChoice';
import CalendarContainer from './containers/CalendarContainer';
import ModalContainer from './containers/ModalContainer';
import NewReservationContainer from './containers/NewReservationContainer';

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
        <Route path='/newReservation' component={NewReservationContainer} >
          <Route path='/enterUserInfo' component={UserInfoForm} />
      </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);