import React, { Component } from 'react';
import ReservationForm from '../components/ReservationForm';
import store from '../store';
import { connect } from 'react-redux';



function mapStateToProps (state) {
  return {
    calendarDaySelected: state.bigCalendarSelectedDate
  };
}

const ReservationFormContainer = connect(
  mapStateToProps
)(ReservationForm);

export default ReservationFormContainer;