class Header extends React.Component {
    render() {
        return (
        <div>
          <h1>{this.props.title}</h1>
          <h3> {this.props.subtitle}</h3>
        </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
          <button 
            disabled={!this.props.hasOptions} 
            onClick={this.props.handleDecision}
              >
              What Should I Do?
          </button>
        </div>
        
        )
    }
}


class Options extends React.Component {
    render() {
        
        return (
        <div>
          <button onClick={this.props.onRemoveAll}>Remove All</button>
          <ol>
          {this.props.options.map((option) => {
                    return  <Option key={option} optionText={option} />
                }
    
)}
         </ol>
        </div>
        
        )
    }
}

class Option extends React.Component {
    render () {
        return (
         <div>
            <li>{this.props.optionText}</li>
         </div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption (e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.onSubmit(option);
        this.setState(() => {
            return {error}
        });
        
    }
    
    
    render () {
      return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input> 
          <button>Add Option</button>
        </form>
      </div>
      
      )
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleDecision = this.handleDecision.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleRemoveAll () {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    
    handleDecision () {
        const choice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
        
        return alert(choice)
        
    }
    
    handleSubmit (option) {
        
        if (!option) {
            return "Error: Please submit an written option"
        } else if (this.state.options.indexOf(option) > -1) {
            return "You already have that on your list"
                   }
        
        this.setState((prevState)=> {
            return {
                options: prevState.options.concat(option)
            }
        })
   }
    
    render() {
        
        const title = "Indecision App";
        const subtitle = "Put your Fate in the Hands of a Computer";
       
        
     return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action 
            hasOptions={this.state.options.length > 0}
            handleDecision={this.handleDecision}  
          />
          <Options 
            options={this.state.options}
            onRemoveAll={this.handleRemoveAll}
           />
          <AddOption
            onSubmit={this.handleSubmit}    
          />
        </div>
        
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

