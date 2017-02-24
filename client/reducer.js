import {SET_CALENDAR_SELECT} from './constants'
import {FETCH_EVENTS} from './constants'
import { combineReducers } from 'redux';

const initialState = {
  bigCalendarSelectedDate: {},
  events: []
};



function bigCalendarReducer(state = '', action) {
	switch (action.type) {
		case SET_CALENDAR_SELECT: return action.selectedDate;
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
  bigCalendarSelectedDate: bigCalendarReducer,
  events: eventReducer
});


