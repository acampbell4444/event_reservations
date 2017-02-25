import axios from 'axios';

import {FETCH_EVENT_TIMES, FETCH_EVENTS, SET_CURRENT_EVENT} from './constants'

export const setCurrentEvent = function (event) {
  return {
    type : SET_CURRENT_EVENT,
    currentEvent: event
  }
}


export const getEventTimes = function (times) {
  return {
    type: FETCH_EVENT_TIMES,
    selectedEventTimes: times
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

export const fetchEventTimes = function (id) {
	return function (dispatch) {
	    axios.get('/api/event/times'+'/'+id) 
	    .then(res => {
	      const getEventTimesAction = getEventTimes(res.data);
	      dispatch(getEventTimesAction);
	    });
	  };
};





