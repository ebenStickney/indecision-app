import React from 'react';
import Option from './Option'

const Options = (props) => {
    return (
      <div>
        <button onClick={props.onRemoveAll}>
        Remove All
        </button>
        {props.options.length ===0 && <p>Please add an option to get started!</p>}
        <ol>
          {props.options.map((option) => {
             return (
               <Option 
                key={option} 
                optionText={option} 
                onDeleteOption={props.onDeleteOption}
               />)
            })}
        </ol>
        
      </div>
    
    )
    
};

export default Options;