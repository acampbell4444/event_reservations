
import React from 'react';
import { Link } from 'react-router';
import BigCalendar from 'react-big-calendar';
let moment = require('moment-timezone');
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { push } from 'react-router-redux';
import {hashHistory} from 'react-router'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

export default function (props) {
  let events = props.events.map(event=>{
    var hours = new Date(event.start).getHours()
    hours = (hours > 12 ? hours - 12 + ' pm' : hours === 12 ? hours + 'pm' : hours + 'am ') + ' Trip'
    return {title : hours, start : new Date(event.start), end : new Date(event.end) }
    })
  return (
   <div style={{'height':'800px'}}>
     <BigCalendar
        selectable
        events={events}
        onSelectEvent={event => {
          hashHistory.push('/newReservation');
          props.setCalendarSelection(event.start)
        }}
      />
  </div>
  );
}