import React from 'react';
import store from '../store';
import CounterInput from 'react-bootstrap-counter';
import CounterInputII from 'react-bootstrap-counter';
import { Link } from 'react-router'
import DateAndProductChoice from './DateAndProductChoice'


var _ = require('lodash');


export default class NewReservation extends React.Component {
  constructor (props) {
    super(props)
  }

  render () { 

    return ( 
      <div>
        <h1>Make A Reservation</h1>
        { 
          this.props.formStep === 1 ?
             <DateAndProductChoice {...this.props} {...store.getState()}/>
          : 
            null 
        }
        {this.props.children}

      </div>
    )
  
      
  }
} 





