import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

// const now = moment();
// console.log("moment object: ", now.format());
const thisDate = new Date();
console.log("date object: ", thisDate);

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      text: "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      // createdAt: props.expense ? 5 : 11,
      focus: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    // console.log('onDescriptionChange !!', e.target.value);
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };

  onDateChanged = (date) => {
    // console.log('date: ', date)
    if (date) {
      this.setState(() => ({ createdAt: date }));
    }
  };

  onFocusChanged = ({ focused }) => {
    console.log("focus: ", focus);
    this.setState(() => ({ focus: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.amount || !this.state.description) {
      this.setState(() => ({
        error: "Please provide description and amount !!",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: Math.round(parseFloat(this.state.amount, 10) * 100),
        createdAt: this.state.createdAt.valueOf(),
        // createdAt: this.state.createdAt,
        note: this.state.text,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form-error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Descrition"
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input
          type="number"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChanged}
          focused={this.state.focus}
          onFocusChange={this.onFocusChanged}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add your text here....."
          className="textarea"
          value={this.state.text}
          onChange={this.onTextChange}
          style={{ color: "yellow" }}
        ></textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
