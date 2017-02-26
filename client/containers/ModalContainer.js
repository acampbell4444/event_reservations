import React, { Component } from 'react';
import ModalForm from '../components/Modal';
import store from '../store';
import { connect } from 'react-redux';
import { setCurrentTimeSlot} from '../action-creators';

function mapDispatchToProps (dispatch) {
  return {
    setSelectedTimeSlot: function (slot) {
      dispatch(setCurrentTimeSlot(slot))
    }
  };
};

function mapStateToProps (state) {
  return {
  	currentEvent: state.currentEvent,
    selectedEventTimes: state.selectedEventTimes
  };
}

const ModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(ModalForm);

export default ModalContainer;