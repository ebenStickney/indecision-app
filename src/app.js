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
    onHandleDecision() {
        alert('submit')
    }
    render() {
        return (
        <div>
          <button onClick={this.onHandleDecision}>What Should I Do?</button>
        </div>
        
        )
    }
}


class Options extends React.Component {
    onHandleReset () {
        alert('Remove All');
    }
    render() {
        
        return (
        <div>
          <button onClick={this.onHandleReset}>Remove All</button>
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
    onHandleSubmit(e) {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        
        if(option) {
          alert(option);  
        }
        
    }
    render() {
      return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input type="text" name="option"></input> 
          <button>Add Option</button>
        </form>
      </div>
      
      )
    }
}

class IndecisionApp extends React.Component {
    render() {
        
        const title = "Indecision App";
        const subtitle = "Put your Fate in the Hands of a Computer";
        let options = ['thing 1', 'thing 2', 'thing 3'];
        
     return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action />
          <Options options={options}/>
          <AddOption />
        </div>
        
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));