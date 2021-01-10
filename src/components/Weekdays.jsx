import React, {useState} from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Weekdays(props) {

  const [weekDay, setWeekDay] = useState({
    value: "",
    label: "",
  });

  const options = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" }
  ];

  // const defaultOption = options[0];

  function handleWeekdayChange(newValue) {
    console.log(newValue);
    setWeekDay({
      value: newValue.value,
      label: newValue.label,
    });
  }

  return (
    <div>
      <Dropdown
        className="dropDown"
        options={options}
        // onChange={this._onSelect}
        onChange={handleWeekdayChange}
        value={options.newValue}
        placeholder="Select an option"
        // required={true}
      />
    </div>
  );
}

export default Weekdays;
