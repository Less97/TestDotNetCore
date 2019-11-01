import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/SecondPage';

class SecondPage extends Component {

    handleChange(a,b) {
        this.props.updateForm(a, b);
    }

    sum() {
        this.props.sum();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.a} onChange={(event) => this.handleChange(event.target.value, this.props.b)} /><br /><br />
                <input type="text" value={this.props.b} onChange={(event) => this.handleChange(this.props.a,event.target.value)} /><br /><br />
                <button className="btn btn-primary" onClick={this.props.sum}>COMPOUND</button>
                <br /><br/>
                <label>Amount:{this.props.s}</label>
        </div>
    );
    }
}

export default connect(
  state => state.SecondPage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(SecondPage);
