import React, { Component } from 'react';
import Calendar from '../components/Calendar';
import store from '../store';
import { connect } from 'react-redux';
import { fetchEventTimes, setCurrentEvent} from '../action-creators';

function mapDispatchToProps (dispatch) {
  return {
    getEventTimes: function (eventId) {
      dispatch(fetchEventTimes(eventId))
    },
    setCurrentlySelectedEvent : function (event) {
    	dispatch(setCurrentEvent(event))
    }
  };
};

function mapStateToProps (state) {
  return {
    events: state.events 
  };
}

const CalendarContainer = connect(
  mapStateToProps,mapDispatchToProps
)(Calendar);

export default CalendarContainer;



//change event model to imitate calendar event format
//seed database with events
//add hook so that events loaded automatically (index/routes)
//create an add event form
