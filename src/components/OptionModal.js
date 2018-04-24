import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
     isOpen={!!props.selectedOption}
     onRequestClose={props.onModalExit}
     contentLabel="Option Modal"
     closeTimeoutMS={400}
     className="modal"
    >
      
      <h2 className="modal__title">Go Forth And: </h2>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        
      <button className="button" onClick={props.onModalExit}>OKAY</button>
    </Modal>
);

export default OptionModal; 
