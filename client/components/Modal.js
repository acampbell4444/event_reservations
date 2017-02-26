import React from 'react';
import store from '../store'
import {hashHistory} from 'react-router'
import { Button, ButtonToolbar, Modal, Component } from 'react-bootstrap';


export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show:true}
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.setState({show: false});
    hashHistory.push('/calendar')
  }
  
  render () {
    // console.log('props',this.props)
    // console.log('state',this.state)


    return ( 
            <div>
              <Modal
                show={this.state.show}
                onHide={this.hideModal}
                bsSize="small" 
                aria-labelledby="contained-modal-title-sm"
              >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-sm">{this.props.currentEvent.dayNum}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                  {
                    this.props.selectedEventTimes.map(slot=>(
                      <li key={slot.id}>{slot.startTimeString} {slot.availableSpots}</li>
                    ))
                  }
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.hideModal}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
    );
  }
}