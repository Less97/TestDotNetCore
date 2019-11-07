import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Compoundr';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
            <div>
            <Form>
                <FormGroup>
                        <Label htmlFor="initialAmount">Initial amount:</Label>
                        <Input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleChange(event.target.value, this.props.interest, this.currentFrequency, this.props.years, this.props.add)} />
                </FormGroup>
                    <FormGroup>
                        <Label htmlFor="years">Years:</Label>
                        <Input name="years" type="text" value={this.props.years} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, event.target.value,this.props.add)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="interest">Interest:</Label>
                        <Input name="interest" type="text" value={this.props.interest} onChange={(event) => this.handleChange(this.props.initialAmount, event.target.value, this.currentFrequency, this.props.years,this.props.add)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="frequency">Compounding periods</Label>
                        <Input type="select" name="frequency" onChange={(event) => this.dropdownlistChange(event.target.value)}>
                            <option value="monthly" selected="true">Monthly</option>
                            <option value="yearly">Yearly</option>
                        </Input>    
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label htmlFor="interest">added monthly:</Label>
                        <Input name="monthlyAdd" type="text" value={this.props.add} onChange={(event) => this.handleChange(this.props.initialAmount, this.props.interest, this.currentFrequency, this.props.years, event.target.value)} />
                    </FormGroup>
                    <Button color="primary" onClick={event => this.compound(event)}>COMPOUND</Button>
                </Form>
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
