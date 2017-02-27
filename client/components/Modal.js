import React from 'react';
import store from '../store'
import {hashHistory, Link} from 'react-router'
import { Button, ButtonToolbar, Modal, Component } from 'react-bootstrap';



export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {show:true}
    this.hideModal = this.hideModal.bind(this)
    this.setSlot = this.setSlot.bind(this)
  }

  hideModal() {
    this.setState({show: false});
    hashHistory.push('/calendar')
  }

  setSlot(slot) {
    this.props.setSelectedTimeSlot(slot)
  }

  render () {
    let event = this.props.currentEvent
    return ( 
      <div>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          bsSize="small" 
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">{(event.monthNum + 1)+"-" + event.dayNum + '-' + event.yearNum}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
             <table >
             <tbody>
                <tr>
                  <th>Time</th>
                  <th>Availabilities</th> 
                </tr>
                {
                  this.props.selectedEventTimes.map(slot=>(
                    <tr key={slot.id} >
                      <td>{slot.startTimeString} </td>
                      <td><Link to="/newReservation" onClick={e=>this.setSlot(slot.startTimeString)}>{slot.availableSpots}</Link></td> 
                    </tr> 
                  ))
                }
            </tbody>
            </table>
          </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}














