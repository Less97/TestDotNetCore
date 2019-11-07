import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Compoundr';

class Compoundr extends Component {

    currentFrequency = 'monthly';

    handleChange(initialAmount, interest, frequency, years, add) {
        this.props.updateForm(initialAmount, interest, frequency, years, add);
    }

    compound(event) {
        event.preventDefault();
        this.props.compound();
    }

    dropdownlistChange(value) {
        this.currentFrequency = value;
        this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years,this.props.add);
    }

    render() {
        return (
            <div className="A">
            <form>
                <div className="form-group">
                        <label htmlFor="initialAmount">Initial amount:</label>
                        <input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleChange(event.target.value, this.props.interest, this.currentFrequency, this.props.years, this.props.add)} />
                </div>
                <div className="form-group">
                        <label htmlFor="years">Years:</label>
                        <input name="years" type="text" value={this.props.years} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, event.target.value,this.props.add)} />
                </div>
                <div className="form-group">
                        <label htmlFor="interest">Interest:</label>
                        <input name="interest" type="text" value={this.props.interest} onChange={(event) => this.handleChange(this.props.initialAmount, event.target.value, this.currentFrequency, this.props.years,this.props.add)} />
                    </div>
                    <div>
                        <label htmlFor="frequency">Compounding periods</label>
                        <select name="frequency" onChange={(event) => this.dropdownlistChange(event.target.value)}>
                            <option value="monthly" selected="true">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </select>    
                    </div>
                <div className="form-group">
                        <label htmlFor="interest">added monthly:</label>
                        <input name="monthlyAdd" type="text" value={this.props.add} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years, event.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={event=>this.compound(event)}>COMPOUND</button>
                </form>
                <div>{this.renderResult()}</div>
                </div>
    );
    }

    renderResult() {
        return (
            <div>
                {this.props.endAmount}
            </div>)

    }
}

export default connect(
    state => state.Compoundr,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Compoundr);
