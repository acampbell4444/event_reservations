
import React from 'react';
import { Link } from 'react-router';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { push } from 'react-router-redux';
import {hashHistory} from 'react-router'
import moment from 'moment-timezone';
import { Button, ButtonToolbar, Modal, Component } from 'react-bootstrap';
import store from '../store'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.getInitialState = this.getInitialState.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }
    getInitialState() {
    return {show: false};
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  
  render () {
    return ( 
            <div>
              <BigCalendar style={{'height':'500px'}}
                selectable
                events={this.props.events}
                onSelectEvent={event => {
                  this.props.setCurrentlySelectedEvent(event)
                  this.props.getEventTimes(event.id)
                  hashHistory.push('/showModal');
                }}
              />
              {this.props.children}
    
        
          </div>
    );//end return
  }//end render
} // end class Calendar