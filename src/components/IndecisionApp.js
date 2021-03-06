import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    
    componentDidMount() {
        try {
           const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if (options) {
           this.setState(() => ({options})); 
        }  
            
        } catch(e) {
          //Leaving this blank is like saying: Do nothing.  Don't fetch 'null'  
        }
        
       
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }
    
    handleDecision = () => {
        const choice = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        this.setState(() => ({ selectedOption: choice}));
          
    }
    
    handleSubmit = (option) => {
        
        if (!option) {
            return "Error: Please submit an written option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "You already have that on your list"
                   }
        
        this.setState((prevState)=> ({ options: prevState.options.concat(option)}));
        
    }
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    
    handleModalExit = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    
    render() {
        
        const title = "Indecision App";
        const subtitle = "Put your Fate in the Hands of a Computer";
       
        
     return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <div className='container'>
           <Action 
            hasOptions={this.state.options.length > 0}
            handleDecision={this.handleDecision}  
          />
          <div className="widget">
           <Options 
            options={this.state.options}
            onRemoveAll={this.handleRemoveAll}
            onDeleteOption={this.handleDeleteOption}
           />
           <AddOption
            onSubmit={this.handleSubmit}    
           />    
          </div>
       </div>
          
          <OptionModal 
           selectedOption= {this.state.selectedOption}
           onModalExit={this.handleModalExit}
          />
        </div>
        
        )
    }
}
