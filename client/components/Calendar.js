
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
    );
  }
} 