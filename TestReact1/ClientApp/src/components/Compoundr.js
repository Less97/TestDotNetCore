import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Compoundr';

class Compoundr extends Component {

    handleChange(a,b) {
        this.props.updateForm(a, b);
    }

    compound() {
        this.props.compound();
    }

    render() {
        return (
            <div>
                <label for="initialAmount">initial amount:</label><input name="initialAmount" type="text" value={this.props.a} onChange={(event) => this.handleChange(event.target.value, this.props.b)} /><br /><br />
                <label for="initialAmount">years:</label><input type="text" value={this.props.b} onChange={(event) => this.handleChange(this.props.a,event.target.value)} /><br /><br />
                <button className="btn btn-primary" onClick={this.props.compound}>COMPOUND</button>
                <br /><br/>
                <label>{this.props.s}</label>
        </div>
    );
    }
}

export default connect(
  state => state.SecondPage,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Compoundr);
