import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "@media only screen and (max-width: 600px)": {
      width: "100%",
    },
  },
  margin: {
    height: theme.spacing(10),
  },
}));

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 6,
    label: "6",
  },
];

function valuetext(value) {
  return `${value}`;
}

// function DiscreteSlider() {
//   const classes = useStyles();
// }

function Timelimit(props) {
  const [hour, setHour] = useState(1);

  // function handleTimeChange(event, newValue) {
  //   setHour(newValue);
  // }

  function handleChange(event, newValue) {
    setHour(newValue);
    props.handleTimeChange(newValue);
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        className="slider"
        defaultValue={1}
        getAriaValueText={valuetext}
        min={1}
        max={6}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        value={hour}
        onChange={handleChange}
      />
    </div>
  );
}

export default Timelimit;
