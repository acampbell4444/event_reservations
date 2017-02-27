import {FETCH_EVENTS, FETCH_EVENT_TIMES, SET_CURRENT_EVENT, SET_CURRENT_TIMESLOT, SET_RESERVATION_600, SET_RESERVATION_800,  SET_FORM_STEP} from './constants'

import { combineReducers } from 'redux';

const initialState = {
  currentTimeSlot: '',
  currentEvent : {},
  selectedEventTimes : [],
  events : [],
  formStep : 1
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

function selected600Reducer(state = 0, action) {
		switch (action.type) {
		case SET_RESERVATION_600: return action.value;
		default: 
			return state;
	}
}
function selected800Reducer(state = 0, action) {
		switch (action.type) {
		case SET_RESERVATION_800: return action.value;
		default: 
			return state;
	}
}
function formStepReducer(state = 1, action) {
		switch (action.type) {
		case  SET_FORM_STEP: return action.step;
		default: 
			return state;
	}
}

export default combineReducers({
  currentTimeSlot : currentTimeSlotReducer,
  currentEvent : currentEventReducer,
  selectedEventTimes : selectedEventTimesReducer,
  events : eventReducer,
  reservation600: selected600Reducer,
  reservation800 : selected800Reducer,
  formStep : formStepReducer

});


