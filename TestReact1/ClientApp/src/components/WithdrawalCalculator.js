import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/WithdrawalCalculator';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container, Table } from 'reactstrap';
import "./WithdrawalCalculator.css";

class WithdrawalCalculator extends Component {

    handleChange(initialAmount, interest, frequency, years, add, percentageWithdrawal) {
        this.props.updateForm(initialAmount, interest, frequency, years, add, percentageWithdrawal);
    }

    compound(event) {
        event.preventDefault();
        this.props.compound();
    }

    dropdownlistChange(value) {
        this.currentFrequency = value;
        this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years, this.props.add, this.props.percentage_withdrawal);
    }

    render() {
        return (<div>
            <Form>
                <FormGroup>
                    <Label htmlFor="initialAmount">Initial amount:</Label>
                    <Input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleChange(event.target.value, this.props.interest, this.currentFrequency, this.props.years, this.props.add, this.props.percentage_withdrawal)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="years">Years:</Label>
                    <Input name="years" type="text" value={this.props.years} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, event.target.value, this.props.add, this.props.percentage_withdrawal)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="interest">Interest (%):</Label>
                    <Input name="interest" type="text" value={this.props.interest} onChange={(event) => this.handleChange(this.props.initialAmount, event.target.value, this.currentFrequency, this.props.years, this.props.add, this.props.percentage_withdrawal)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="frequency">Compounding periods</Label>
                    <Input type="select" defaultValue="monthly" name="frequency" onChange={(event) => this.dropdownlistChange(event.target.value)}>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </Input>
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="interest">Added monthly:</Label>
                    <Input name="monthlyAdd" type="text" value={this.props.add} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years, event.target.value, this.props.percentage_withdrawal)} />
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="interest">Percentage Withdrawal:</Label>
                    <Input name="monthlyAdd" type="text" value={this.props.percentage_withdrawal} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years, this.props.add, event.target.value)} />
                </FormGroup>
                <Button color="primary" onClick={event => this.compound(event)}>COMPOUND</Button>
            </Form>
            <div>{this.renderTotal()}</div>
            <div className={!this.props.calculated ? 'hidden':''}>
                {this.renderTable(this.props.yearlyAmounts)}
            </div>
        </div>)
    }


    renderTotal() {
        return (
            <div className="margin-top-1em">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">{this.props.endAmount}</h1>
                        <p className="lead">this is the amount you will have after the compounding time.</p>
                    </Container>
                </Jumbotron>
            </div>)

    }

    renderTable(amountTable) {
        debugger;
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Amount</th>
                        <th>Yearly Withdraw</th>
                        <th>Monthly Withdraw</th>
                    </tr>
                </thead>
                <tbody>
                    {amountTable.map(
                        (idx,itm) => {
                            return (<tr>
                                <th scope="row">{idx}</th>
                                <td>{itm}</td>
                            </tr>)
                        })}
                </tbody>
            </Table>)
    }

}

export default connect(
    state => state.WithdrawalCalculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(WithdrawalCalculator);