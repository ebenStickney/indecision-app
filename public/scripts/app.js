'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//class Header extends React.Component {
//    render() {
//        return (
//        <div>
//          <h1>{this.props.title}</h1>
//          <h3> {this.props.subtitle}</h3>
//        </div>
//        )
//    }
//}
//
//class Action extends React.Component {
//    onHandleDecision() {
//        alert('submit')
//    }
//    render() {
//        return (
//        <div>
//          <button onClick={this.onHandleDecision}>What Should I Do?</button>
//        </div>
//        
//        )
//    }
//}
//
//
//class Options extends React.Component {
//    onHandleReset () {
//        alert('Remove All');
//    }
//    render() {
//        
//        return (
//        <div>
//          <button onClick={this.onHandleReset}>Remove All</button>
//          <ol>
//          {this.props.options.map((option) => {
//                    return  <Option key={option} optionText={option} />
//                }
//    
//)}
//         </ol>
//        </div>
//        
//        )
//    }
//}
//
//class Option extends React.Component {
//    render () {
//        return (
//         <div>
//            <li>{this.props.optionText}</li>
//         </div>
//        )
//    }
//}
//class AddOption extends React.Component {
//    onHandleSubmit(e) {
//        e.preventDefault();
//        
//        const option = e.target.elements.option.value.trim();
//        
//        if(option) {
//          alert(option);  
//        }
//        
//    }
//    render() {
//      return (
//      <div>
//        <form onSubmit={this.onHandleSubmit}>
//          <input type="text" name="option"></input> 
//          <button>Add Option</button>
//        </form>
//      </div>
//      
//      )
//    }
//}
//
//class IndecisionApp extends React.Component {
//    render() {
//        
//        const title = "Indecision App";
//        const subtitle = "Put your Fate in the Hands of a Computer";
//        let options = ['thing 1', 'thing 2', 'thing 3'];
//        
//     return (
//        <div>
//          <Header title={title} subtitle={subtitle}/>
//          <Action />
//          <Options options={options}/>
//          <AddOption />
//        </div>
//        
//        )
//    }
//}
//
//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.onReset = _this.onReset.bind(_this);
        _this.onAddOne = _this.onAddOne.bind(_this);
        _this.onMinusOne = _this.onMinusOne.bind(_this);
        _this.state = {
            count: 0
        };

        return _this;
    }

    _createClass(Counter, [{
        key: 'onReset',
        value: function onReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'onMinusOne',
        value: function onMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1

                };
            });
        }
    }, {
        key: 'onAddOne',
        value: function onAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.onAddOne },
                    'Add 1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.onMinusOne },
                    'Subtract 1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.onReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
