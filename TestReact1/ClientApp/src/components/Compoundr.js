import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Compoundr';

class Compoundr extends Component {

    handleChange(initialAmount, interest, years) {
        this.props.updateForm(initialAmount, interest, years);
    }

    compound() {
        this.props.compound();
    }

    render() {
        return (
            <div>
                <label htmlFor="initialAmount">initial amount:</label><input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleChange(event.target.value, this.props.interest, this.props.years)} /><br /><br />
                <label htmlFor="years">years:</label><input name="years" type="text" value={this.props.years} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.years, event.target.value)} /><br /><br />
                <label htmlFor="interest">interest:</label><input name="interest" type="text" value={this.props.interest} onChange={(event) => this.handleChange(this.props.initialAmount, event.target.value, this.props.years)} /><br /><br />
                <button className="btn btn-primary" onClick={this.props.compound}>COMPOUND</button>
                <br /><br/>
                <label>{this.props.endEmount}</label>
        </div>
    );
    }
}

export default connect(
  state => state.SecondPage,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Compoundr);
