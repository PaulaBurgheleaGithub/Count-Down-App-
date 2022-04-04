import "./App.css";
import { Component } from "react";
import View from "./View.js";

import { getTimespan } from "timer-library";

console.log(getTimespan);

class App extends Component {
  static YEAR = 365 * this.DAY;
  /*I might not use mounth as it's a bit complicated to set correctly*/
  static MOUNTH = 30 * this.DAY;
  static DAY = 24 * this.HOUR;
  static HOUR = 60 * this.MINUTE;
  static MINUTE = 60 * this.SECOUND;
  static SECOUND = 1000;

  render() {
    return <View />;
  }
}

export default App;
