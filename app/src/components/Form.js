import React, { Component } from 'react';

export default class PaymentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A payment was submitted!');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>I would like to pay via…</label>
        <select onChange={this.handleChange}>
          <option value="card_payment" selected>Card</option>
          <option value="bank_payment">Bank Transfer</option>
        </select>
        <input type="text" placeholder="Card Number" onChange={this.handleChange} />
        <input type="text" placeholder="MM / YY" onChange={this.handleChange} />
        <input type="text" placeholder="CVC" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
