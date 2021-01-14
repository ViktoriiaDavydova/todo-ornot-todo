import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Dayparts extends Component {
  constructor(props) {
    super(props);

    this.state = { dayPart: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  options = [
    { value: "morning", label: "Morning" },
    { value: "noon", label: "Noon" },
    { value: "evening", label: "Evening" },
    { value: "night", label: "Night" },
  ];

  handleChange = (newValue) => {
    console.log("daypart ", newValue);
    this.setState({ dayPart: newValue });
    this.props.handleDaypartChange(newValue);
  };

  render() {
    const defaultOption = this.state.dayPart;

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
export default Dayparts;
