import axios from 'axios';

import {SET_CALENDAR_SELECT} from './constants'
import {FETCH_EVENTS} from './constants'


export const setCalendarSelect = function (date) {
  return {
    type: SET_CALENDAR_SELECT,
    selectedDate: date
  };
};


export function getEvents (events) {
  return {
    type: FETCH_EVENTS,
    events
  };
}

export const fetchEventsFromServer = function () {
	return function (dispatch) {
	    axios.get('/api/event') 
	    .then(res => {
	      const getEventsAction = getEvents(res.data);
	      dispatch(getEventsAction);
	    });
	  };
};



