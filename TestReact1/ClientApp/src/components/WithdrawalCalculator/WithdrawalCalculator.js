import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/WithdrawalCalculator';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container, Table } from 'reactstrap';
import MoneyHelper from '../../helpers/MoneyHelper';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "./WithdrawalCalculator.css";

class WithdrawalCalculator extends Component {

    handleChange(initialAmount, interest, frequency, years, add, percentageWithdrawal,taxRate) {
        this.props.updateForm(initialAmount, interest, frequency, years, add, percentageWithdrawal,taxRate);
    }

    compound(event) {
        event.preventDefault();
        this.props.compound();
    }

    dropdownlistChange(value) {
        this.handleChange(this.props.initialAmount, this.props.interest, value, this.props.years, this.props.add, this.props.percentageWithdrawal,this.props.taxRate);
    }

    render() {
        return (<div>
            <Form>
                <FormGroup>
                    <Label htmlFor="initialAmount">Initial amount:</Label>
                    <Input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleChange(event.target.value, this.props.interest, this.props.frequency, this.props.years, this.props.add, this.props.percentageWithdrawal, this.props.taxRate)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="years">Years:</Label>
                    <Input name="years" type="text" value={this.props.years} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.props.frequency, event.target.value, this.props.add, this.props.percentageWithdrawal, this.props.taxRate)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="interest">Interest (%):</Label>
                    <Input name="interest" type="text" value={this.props.interest} onChange={(event) => this.handleChange(this.props.initialAmount, event.target.value, this.props.frequency, this.props.years, this.props.add, this.props.percentageWithdrawal,this.props.taxRate)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="frequency">Compounding periods</Label>
                    <Input type="select" defaultValue="monthly" name="frequency" onChange={(event) => this.dropdownlistChange(event.target.value)}>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </Input>
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="monthlyAdd">Added monthly:</Label>
                    <Input name="monthlyAdd" type="text" value={this.props.add} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.props.frequency, this.props.years, event.target.value, this.props.percentageWithdrawal, this.props.taxRate)} />
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="withdrawal">Percentage Withdrawal:</Label>
                    <Input name="withdrawal" type="text" value={this.props.percentageWithdrawal} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.props.frequency, this.props.years, this.props.add, event.target.value, this.props.taxRate)} />
                </FormGroup>
                <FormGroup className="form-group">
                    <Label htmlFor="taxRate">TaxRate:</Label>
                    <Input name="taxRate" type="text" value={this.props.taxRate} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.props.frequency, this.props.years, this.props.add, this.props.percentageWithdrawal,event.target.value)} />
                </FormGroup>
                <Button color="primary" onClick={event => this.compound(event)}>COMPOUND</Button>
            </Form>
            <div>{this.renderTotal()}</div>
            <div className={!this.props.calculated ? 'hidden':''}>
                {this.renderTable(this.props.yearlyAmounts)}
            </div>
            <div className={!this.props.calculated ? 'hidden' : ''}>
                {this.renderGraph()}
            </div>
        </div>)
    }


    renderTotal() {
        return (
            <div className="margin-top-1em">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">{MoneyHelper.convertMoneyToString(this.props.endAmount)}</h1>
                        <p className="lead">this is the amount you will have after the compounding time.</p>
                    </Container>
                </Jumbotron>
            </div>)

    }

    renderTable(amountTable) {
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
                        (itm,idx) => {
                            return (<tr>
                                <th scope="row">{idx}</th>
                                <td>{MoneyHelper.convertMoneyToString(itm.amount)}</td>
                                <td>{MoneyHelper.convertMoneyToString(itm.percentageWithdrawAnnual)}</td>
                                <td>{MoneyHelper.convertMoneyToString(itm.percentageWithdrawMonthly)}</td>
                            </tr>)
                        })}
                </tbody>
            </Table>)
    }

    renderGraph() {
        debugger;
        var data = this.props.yearlyAmounts.map(function (itm, idx) { return { Y: 'Year' + idx, Amount: itm.amount, amountText: MoneyHelper.convertMoneyToString(itm.amount) } });
        if (!this.props.calculated)
            return (<div></div>)
        else
            return (
                <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="Amount" label="amountText" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="Y" label="" />
                <YAxis />
                        <Tooltip data="amountText" />
                    </LineChart>
                </ResponsiveContainer></div>)

    }


}

export default connect(
    state => state.WithdrawalCalculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(WithdrawalCalculator);