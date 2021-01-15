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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonOption: "",
      weekdayOption: "",
      daypartOption: "",
      timelineOption: 1,
      res: {
        id: "",
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

    var filterResult = results.filter(
      (result) =>
        result.season.includes(this.state.seasonOption.value) &&
        result.weekDay.includes(this.state.weekdayOption.value) &&
        result.dayPart.includes(this.state.daypartOption.value) &&
        result.timeLimit.includes(this.state.timelineOption)
    );

    const randomResult =
      filterResult[Math.floor(Math.random() * filterResult.length)];
    this.setState({ res: randomResult });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <h1>To do or not to do?</h1>
            <p>Are you bored and don't know what to do? </p>
            <p>Fill the fields and get some ideas how to spend your free time!</p>
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
              <Button type="submit" className="btn" size="lg">
                Submit
              </Button>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="resultStyle">
              {this.state.res !== undefined ? (
                <Result
                  id={this.state.res.id}
                  title={this.state.res.title}
                  img={this.state.res.img}
                  handleSubmit={this.handleSubmit}
                />
              ) : (
                <Result
                  title="All fields are required"
                  img="https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
