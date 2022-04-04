import "./App.css";
import { Component } from "react";
// import View from "./View.js";
// import { useState } from "react";
import { getTimespan } from "timer-library";

class App extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    secounds: 0,
  };

  componentDidMount() {
    const endDate = this.props.endDate;

    this.timerId = setInterval(() => {
      const currentDate = new Date();

      const [days, hours, minutes, secounds] = getTimespan(
        currentDate,
        endDate
      );

      this.setState({
        days,
        hours,
        minutes,
        secounds,
      });
    }, 500); //not PERFECT
  }
  render() {
    const { days, hours, minutes, secounds } = this.state;

    return (
      <>
        <h1> Count to {this.props.endDate.toLocaleString()}</h1>
        <ul>
          <li> {days} days </li>
          <li>{hours} hours</li>
          <li>{minutes} minutes</li>
          <li>{secounds} secounds</li>
        </ul>
      </>
    );
  }
  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }
}

export default App;

// class App extends Component {
//   static YEAR = 365 * this.DAY;
//   /*I might not use mounth as it's a bit complicated to set correctly*/
//   static MOUNTH = 30 * this.DAY;
//   static DAY = 24 * this.HOUR;
//   static HOUR = 60 * this.MINUTE;
//   static MINUTE = 60 * this.SECOUND;
//   static SECOUND = 1000;

//   render() {
//     return <View />;
//   }
// }

// export default App;
