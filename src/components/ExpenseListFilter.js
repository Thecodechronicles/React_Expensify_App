import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";

class ExpenseListFilter extends React.Component {
  state = {
    calenderFocused: null,
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            e.preventDefault();
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              console.log("date");
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              console.log("amount");
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.calenderFocused}
          isOutsideRange={() => (false)}
          numberOfMonths={1}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const ExpenseListFilterComp = connect(mapStateToProps)(ExpenseListFilter);

export default ExpenseListFilterComp;
