import React from 'react';
let moment = require('moment-timezone');

export default function (props) {
  return (
      <div className="">
        <h1>Welcome to the reservation form!</h1> 
        {moment.tz(props.calendarDaySelected, "America/Los_Angeles").format('MM-DD-YYYY-h a')}
       
      </div>

  );
}