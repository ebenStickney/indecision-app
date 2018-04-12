import React from 'react';

const Option = (props) => (
    
      <div className="option-layout">            
        
        <p className="option_text">{props.count}. {props.optionText}</p>
        <button
          className="button button--link"
          onClick={(e) => {
            props.onDeleteOption(props.optionText)
                }}
        >
           Remove
        </button>           
     
      </div>
    );
    

export default Option; 