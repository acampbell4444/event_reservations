import {FETCH_EVENTS, FETCH_EVENT_TIMES, SET_CURRENT_EVENT, SET_CURRENT_TIMESLOT} from './constants'

import { combineReducers } from 'redux';

const initialState = {
  currentTimeSlot: '',
  currentEvent : {},
  selectedEventTimes : [],
  events : []
};

function currentTimeSlotReducer(state = '', action) {
	switch (action.type) {
		case SET_CURRENT_TIMESLOT: return action.currentTimeSlot;
		default: 
			return state;
	}
}

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
  currentTimeSlot : currentTimeSlotReducer,
  currentEvent : currentEventReducer,
  selectedEventTimes : selectedEventTimesReducer,
  events : eventReducer
});


