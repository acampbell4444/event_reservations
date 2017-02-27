import React, { Component } from 'react';
import NewReservationForm from '../components/NewReservation';
import store from '../store';
import { connect } from 'react-redux';
import { setReservation600, setReservation800, goTo2} from '../action-creators';

function mapDispatchToProps (dispatch, ownProps) {
  console.log('pp',store.getState())

   function getAvailableSpots () {
    return _.find(store.getState().selectedEventTimes, {startTimeString: store.getState().currentTimeSlot}).availableSpots
    }

  return {

   goToStep2 () {
    console.log('hey!')
    dispatch(goTo2())
   },
    addTo600 () {
    let spots = getAvailableSpots() - store.getState().reservation600 - store.getState().reservation800
    if(spots>0){
      dispatch(setReservation600(store.getState().reservation600+1))
    }
  },
    addTo800 () {
    let spots = getAvailableSpots() - store.getState().reservation800 - store.getState().reservation600
    if(spots>0){
      dispatch(setReservation800(store.getState().reservation800+1))
    }
  },
    minusFrom600 () {
    if(store.getState().reservation600 > 0){
       dispatch(setReservation600(store.getState().reservation600-1))
    }
  },
    minusFrom800 () {
    if(store.getState().reservation800 > 0){
       dispatch(setReservation800(store.getState().reservation800-1))
    }
  }
  };
};

function mapStateToProps (state) {
  return {
  	currentEvent: state.currentEvent,
  	currentTimeSlot: state.currentTimeSlot,
    selectedEventTimes: state.selectedEventTimes,
    setCurrentTimeSlot: state.setCurrentTimeSlot,
    reservation600: state.reservation600,
    reservation800: state.reservation800,
    formStep : state.formStep
  };
}

const NewReservationContainer = connect(
  mapStateToProps, mapDispatchToProps
)(NewReservationForm);

export default NewReservationContainer;