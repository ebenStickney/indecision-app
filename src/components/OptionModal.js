import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
     isOpen={!!props.selectedOption}
     onRequestClose={props.onModalExit}
     contentLabel="Option Modal"
    >
      
      <h1>Go Forth And: </h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        
      <button onClick={props.onModalExit}>Okay</button>
    </Modal>
);

export default OptionModal; 