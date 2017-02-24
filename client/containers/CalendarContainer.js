import React, { Component } from 'react';
import Calendar from '../components/Calendar';
import store from '../store';
import { connect } from 'react-redux';
import { setCalendarSelect} from '../action-creators';

function mapDispatchToProps (dispatch) {
  return {
    setCalendarSelection: function (date) {
      dispatch(setCalendarSelect(date))
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
