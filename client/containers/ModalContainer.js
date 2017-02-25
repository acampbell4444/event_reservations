import React, { Component } from 'react';
import ModalForm from '../components/Modal';
import store from '../store';
import { connect } from 'react-redux';



function mapStateToProps (state) {
  return {
  	currentEvent: state.currentEvent,
    selectedEventTimes: state.selectedEventTimes
  };
}

const ModalContainer = connect(
  mapStateToProps
)(ModalForm);

export default ModalContainer;