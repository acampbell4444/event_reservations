import React from 'react';
import {Link} from 'react-router'
import store from '../store';

export default function (props) {
  console.log('999999',props)
return ( 
      <div>
      600
      --{props.reservation600}
      <button onClick={props.addTo600}> + </button>
      <button onClick={props.minusFrom600}> - </button>
       800
        --{props.reservation800}
      <button onClick={props.addTo800}> + </button>
      <button onClick={props.minusFrom800}> - </button>
      <Link to='/enterUserInfo' onClick={props.goToStep2}> next </Link>
      </div>
    )
}