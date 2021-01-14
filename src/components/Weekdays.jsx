import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Weekdays extends Component {
  constructor(props) {
    super(props);

    this.state = { weekDay: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  options = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
  ];

  handleChange = (newValue) => {
    console.log("weekday ", newValue);
    this.setState({ weekDay: newValue });
    this.props.handleWeekdayChange(newValue);
  };

  render() {
    const defaultOption = this.state.weekDay;

    return (
      <div>
        <Dropdown
          className="dropDown"
          options={this.options}
          onChange={this.handleChange}
          value={defaultOption}
          placeholder="Select an option"
          required={true}
        />
      </div>
    );
  }
}
export default Weekdays;
