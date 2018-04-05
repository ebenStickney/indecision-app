//let visibility = false;
//
//const onVisible = () => {
//   visibility = !visibility;
//    renderVisibility();
//};
//
//const renderVisibility = () => {
//    const visible = (
//        <div>
//         <h1>Now, you see me.</h1>
//         <button onClick={onVisible}>{!visibility ? 'Lightning in a Bottle' : 'You still on that?'}</button>
//         {visibility && (
//             <p>But that app though...</p>)}
//        </div>
//        
//        
//        );
//    ReactDOM.render(visible, document.getElementById('app'));
//}
//
//renderVisibility();

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibility: false};
        this.onVisible = this.onVisible.bind(this);
    }
    
    onVisible () {
        this.setState(() => {
            return {
                visibility: !this.state.visibility
            };
        })
    }
    
    render () {
        return (
         <div>
         <h1>Get in on this App Idea</h1>
         <button onClick={this.onVisible}>{!this.state.visibility ? 'Lightning in a Bottle' : 'You still on that?'}</button>
         {this.state.visibility && (
             <p>But that app though...</p>)}
        </div>
            
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));