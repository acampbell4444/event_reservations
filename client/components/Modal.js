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

    return ( 
            <div>
              <Modal
                show={this.state.show}
                onHide={this.hideModal}
                bsSize="small" 
                aria-labelledby="contained-modal-title-sm"
              >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-sm">{store.getState().currentEvent.dayNum}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>{store.getState().selectedEventTimes.length&&store.getState().selectedEventTimes[0].name}</h4>
                  <p>ident vel magnam quod. Possimus eligendi non corrupti tenetur culpa accusantium quod quis. Voluptatum quaerat animi dolore maiores molestias voluptate? Necessitatibus illo omnis laborum hic enim minima! Similique. Dolor voluptatum reprehenderit nihil adipisci aperiam voluptatem soluta
                   magnam accusamus iste incidunt tempore consequatur illo illo odit. Asperiores nesciunt iusto nemo animi ratione. Sunt odit similique doloribus temporibus reiciendis! Ullam. Dolor dolores veniam animi sequi dolores molestias voluptatem iure velit. Elit dolore quaerat incidunt enim aut distinctio. Ratione molestiae laboriosam
                   similique laboriosam eum et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.hideModal}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>
    );//end return
  }//end render
} // end class Calendar