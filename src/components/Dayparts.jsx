import React, {useState} from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Dayparts(props) {

  const [dayPart, setDayPart] = useState({
    value: "",
    label: "",
  });

  const options = [
    { value: "morning", label: "Morning" },
    { value: "noon", label: "Noon" },
    { value: "evening", label: "Evening" },
    { value: "night", label: "Night" },
  ];

  // const defaultOption = options[0];

  function handleDaypartChange(newValue) {
    console.log(newValue);
    setDayPart({
      value: newValue.value,
      label: newValue.label,
    });
  }

  return (
    <div className="dropDown">
      <Dropdown
        options={options}
        // onChange={this._onSelect}
        onChange={handleDaypartChange}
        value={options.newValue}
        placeholder="Select an option"
        // required={true}
      />
    </div>
  );
}

export default Dayparts;
