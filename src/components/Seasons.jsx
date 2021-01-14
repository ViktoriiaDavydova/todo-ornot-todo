import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Seasons extends Component {
  constructor(props) {
    super(props);

    this.state = { season: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  options = [
    { value: "winter", label: "Winter" },
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
    { value: "fall", label: "Fall" },
  ];

  handleChange = (newValue) => {
    console.log("season", newValue);
    this.setState({ season: newValue });
    this.props.handleSeasonChange(newValue);
  };

  render() {
    const defaultOption = this.state.season;
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
export default Seasons;
