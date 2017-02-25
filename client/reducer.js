import {FETCH_EVENTS, FETCH_EVENT_TIMES, SET_CURRENT_EVENT} from './constants'

import { combineReducers } from 'redux';

const initialState = {
  currentEvent : {},
  selectedEventTimes : [],
  events : []
};

function currentEventReducer(state = {}, action) {
	switch (action.type) {
		case SET_CURRENT_EVENT: return action.currentEvent;
		default: 
			return state;
	}
}

function selectedEventTimesReducer(state = [], action) {
	switch (action.type) {
		case FETCH_EVENT_TIMES: return action.selectedEventTimes;
		default: 
			return state;
	}
}

function eventReducer(state = [], action) {
		switch (action.type) {
		case FETCH_EVENTS: return action.events;
		default: 
			return state;
	}
}

export default combineReducers({
  currentEvent : currentEventReducer,
  selectedEventTimes : selectedEventTimesReducer,
  events : eventReducer
});


