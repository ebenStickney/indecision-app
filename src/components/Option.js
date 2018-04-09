import React from 'react';

const Option = (props) => {
    return ( 
      <div>
            
       <li>
        {`${props.optionText} `}
          
         <button 
          onClick={(e) => {
            props.onDeleteOption(props.optionText)
                }}
         >
           Remove
       </button>
           
       </li>
       
      </div>
    ) 
    
};

export default Option; 