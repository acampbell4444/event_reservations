import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import Main from './components/Main';
 import CalendarContainer from './containers/CalendarContainer';
 import ReservationFormContainer from './containers/ReservationFormContainer';

import store from './store';
import { fetchEventsFromServer } from './action-creators';


function loadEvents() {
  console.log('loading events');
  const fetchEventsThunk = fetchEventsFromServer();
  store.dispatch(fetchEventsThunk); 
}

ReactDOM.render(
  <Provider store={store} >
    <Router history={hashHistory} >
      <Route path='/' component={Main} >
      <Route 
          path='/calendar' 
          component={CalendarContainer} 
          onEnter={loadEvents}
        />
         <Route 
          path='/newReservation' 
          component={ReservationFormContainer} 
          //onEnter={}
        />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);