import React, { Component } from "react";
import "../css/styles.css";
import { Button } from "react-bootstrap";
import Seasons from "./Seasons";
import Weekdays from "./Weekdays";
import Dayparts from "./Dayparts";
import Timelimit from "./Timelimit";
import Result from "./Result";
import Footer from "./Footer";
import { results } from "../results";

// var _ = require("lodash");

// function createResult(result) {
//   return (
//     <Result
//       key={result.id}
//       id={result.id}
//       activity={result.activity}
//       img={result.img}
//       // seaSon={result.season}
//       // weekday={result.weekDay}
//       // daypart={result.dayPart}
//       // timelimit={result.timeLimit}
//     />
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonOption: "",
      weekdayOption: "",
      daypartOption: "",
      timelineOption: 1,
      res: {
        // id: 0,
        title: "Your result will be here",
        img:
          "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    };

    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleWeekdayChange = this.handleWeekdayChange.bind(this);
    this.handleDaypartChange = this.handleDaypartChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSeasonChange(newValue) {
    this.setState({
      seasonOption: newValue,
    });
  }

  handleWeekdayChange(newValue) {
    this.setState({
      weekdayOption: newValue,
    });
  }

  handleDaypartChange(newValue) {
    this.setState({
      daypartOption: newValue,
    });
  }

  handleTimeChange(newValue) {
    this.setState({
      timelineOption: newValue,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit", this.state.timelineOption);

    var filterResult = results.filter(
      (result) =>
        result.season.includes(this.state.seasonOption.value) &&
        result.weekDay.includes(this.state.weekdayOption.value) &&
        result.dayPart.includes(this.state.daypartOption.value) &&
        result.timeLimit.includes(this.state.timelineOption)
    );

    const randomResult =
      filterResult[Math.floor(Math.random() * filterResult.length)];
    console.log(filterResult);
    console.log(randomResult);

    this.setState({ res: randomResult });

    console.log("res ", this.state.res.title);
  }

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
                handleWeekdayChange={this.handleWeekdayChange}
                value={this.state.weekdayOption}
                options={this.options}
              />
              <h2>Chose a part of the day</h2>
              <Dayparts
                handleDaypartChange={this.handleDaypartChange}
                value={this.state.daypartOption}
              />
              <h2>How many free hours do you have?</h2>
              <br></br>
              <Timelimit
                handleTimeChange={this.handleTimeChange}
                value={this.state.timelineOption}
              />
              <Button
                type="submit"
                className="btn"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="resultStyle">
              {/* {results.map(this.createResult)}  */}
              {/* {this.createResult} */}
              <Result
                id={this.state.res.id}
                title={this.state.res.title}
                img={this.state.res.img}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
