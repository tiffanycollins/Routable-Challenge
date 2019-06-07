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
      <div className="form-container">
        <h2><b>$4,581.75 USD</b> due on <b>June 23, 2019</b></h2>
        <form onSubmit={this.handleSubmit}>
          <label>I would like to pay via…</label>
          <div className="select">
            <select onChange={this.handleChange}>
              <option value="card_payment" selected>Card</option>
              <option value="bank_payment">Bank Transfer</option>
            </select>
            <div className="select_arrow">
            </div>
          </div>
          <div className="input-container">
            <input className="card-num" type="text" placeholder="Card Number" onChange={this.handleChange} />
            <input className="card-date" type="text" placeholder="MM / YY" onChange={this.handleChange} />
            <input className="card-cvc" type="text" placeholder="CVC" onChange={this.handleChange} />
          </div>
          <input type="submit" value="Pay Invoice" />
        </form>
      </div>
    );
  }
}
