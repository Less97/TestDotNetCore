import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

export class Counter extends React.Component {

    render() {
        return (<div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p>Current count: <strong>{this.props.count}</strong></p>
            <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>
            <button className="btn btn-primary" onClick={this.props.decrement}>Decrement</button>
        </div>)
    }
}

export default connect(
  state => state.FirstPage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
