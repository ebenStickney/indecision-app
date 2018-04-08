class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onReset = this.onReset.bind(this);
        this.onAddOne = this.onAddOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.state = {
            count: 0
        };
        
    }
    
    componentDidMount() {
       try {
           const countString = localStorage.getItem('count');
           const currentCount = parseInt(countString, 10);
        
        if (!isNaN(currentCount)) {
            this.setState(() => ({count: currentCount}))
        }
    } catch(e) {
        
        //do nothing
    }
           
           
       } 
        
    
    componentDidUpdate(prevProps, prevState) {
        
        if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);  
        }
       
    }
    
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