import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/CagrCalculator';

export class CagrCalculator extends Component {

    handleUpdate(initialAmount, endAmount, years) {
        this.props.updateForm(initialAmount, endAmount, years);
    }

    handleCalculate(event) {
        event.preventDefault();
        this.props.calculate();
    }

    render() {
        return (
            <div className="container">
            <form>
                    <div className="form-group">
                        <label htmlFor="initialAmount">initial amount:</label>
                        <input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleUpdate(event.target.value, this.props.endAmount, this.props.years)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="initialAmount">End Amount:</label>
                        <input name="initialAmount" type="text" value={this.props.endAmount} onChange={(event) => this.handleUpdate(this.props.initialAmount, event.target.value, this.props.years)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="initialAmount">Years:</label>
                        <input name="initialAmount" type="text" value={this.props.years} onChange={(event) => this.handleUpdate(this.props.initialAmount, this.props.endAmount, event.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={event => this.handleCalculate(event)}>Calculate</button>
                </form>
                <div>EndAmount:{this.props.CAGR} %</div>
        </div>)
    }
}

export default connect(
    state => state.CAGRCalculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CagrCalculator);