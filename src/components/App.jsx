import React, { Component } from "react";
import "../css/styles.css";
import { Button } from "react-bootstrap";
import Seasons from "./Seasons";
import Weekdays from "./Weekdays";
import Dayparts from "./Dayparts";
import Timelimit from "./Timelimit";
import Result from "./Result";
import Footer from "./Footer";
import results from "../todoDB";

function createResult(result) {
  return (
    <Result
      key={result.id}
      id={result.id}
      activity={result.activity}
      img={result.img}
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // options: [],
      seasonOption: ""
    };

    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSeasonChange( newValue) {
  //   this.setState({
  //     seasonOption: {
  //       value: newValue.value,
  //       label: newValue.label,
  //     },
  //   });
  //   // console.log("handle season " + seasonOption);
  // }

  handleSeasonChange(newValue) {
    this.setState({
      seasonOption: newValue,
    });
    console.log("handle season ", this.state.seasonOption);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit", this.state.seasonOption);
  }

  //  submitResult(event) {
  //   // console.log(props.state.daypartValue);
  // }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1>To do or not to do?</h1>
            <form onSubmit={this.handleSubmit}>
              <h2>Choose a season</h2>
              <Seasons
                handleSeasonChange={this.handleSeasonChange}
                value={this.state.seasonOption}
                options={this.options}
              />
              <h2>Choose a day of the week</h2>
              <Weekdays
                onChange={this.handleWeekdayChange}
                weekdayValue={this.value}
              />
              <h2>Chose a part of the day</h2>
              <Dayparts
                onChange={this.handleDaypartChange}
                daypartValue={this.value}
              />
              <h2>How many free hours do you have?</h2>
              <br></br>
              <Timelimit
                onChange={this.handleTimeChange}
                timeValue={this.value}
              />
              <Button
                type="submit"
                className="btn"
                size="lg"
                // onClick={this.submitResult}
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="resultStyle">
              {/* {results.map(createResult)} */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
