import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/CagrCalculator';
import { Button, Form, FormGroup, Label, Input, Jumbotron, Container } from 'reactstrap';

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
            <div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="initialAmount">Initial amount:</Label>
                        <Input name="initialAmount" type="text" value={this.props.initialAmount} onChange={(event) => this.handleUpdate(event.target.value, this.props.endAmount, this.props.years)} />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label htmlFor="initialAmount">End Amount:</Label>
                        <Input name="initialAmount" type="text" value={this.props.endAmount} onChange={(event) => this.handleUpdate(this.props.initialAmount, event.target.value, this.props.years)} />
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label htmlFor="initialAmount">Years:</Label>
                        <Input name="initialAmount" type="text" value={this.props.years} onChange={(event) => this.handleUpdate(this.props.initialAmount, this.props.endAmount, event.target.value)} />
                    </FormGroup>
                    <Button color="primary" onClick={event => this.handleCalculate(event)}>Calculate</Button>
                </Form>
                <div>{this.renderResult()}</div>
        </div>)
    }

    renderResult() {
        return (<div className="margin-top-1em">
                    <Jumbotron fluid>
                        <Container fluid>
                    <h1 className="display-3">{this.props.CAGR} %</h1>
                    <p className="lead">This has been the Compounded annual return in {this.props.years} years.</p>
                        </Container>
                    </Jumbotron>
        </div>)
    }

}

export default connect(
    state => state.CAGRCalculator,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CagrCalculator);