class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onReset = this.onReset.bind(this);
        this.onAddOne = this.onAddOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.state = {
            count: 0
        };
        
    };
    onReset () {
       this.setState(() => {
           return {
               count: 0
           }
       })
        
    };
    
    onMinusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
        
        }})
    };
                      
    onAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    };

    render() {
        return (
        <div>
        <h1>Counter</h1>  
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.onAddOne}>Add 1</button>
        <button onClick={this.onMinusOne}>Subtract 1</button>
        <button onClick={this.onReset}>Reset</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));