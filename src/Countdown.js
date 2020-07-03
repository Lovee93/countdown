import React, { Component } from 'react';
import './App.css';
import dateFormat from 'dateformat';

class Countdown extends Component {
  
  constructor() {
    super();
    this.state = {
      newDate: new Date('1.1.2021').getTime(), 
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };
  
  timer = 0;    
  
  componentDidMount = () => {
    this.timer = setInterval(() => {
      this.updateTimer(); 
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  calcTime(event) {
    const calDate = event.target.value
    if(typeof(calDate) !== 'undefined') {
      this.setState({newDate: new Date(calDate).getTime()});
    }
  }

  updateTimer = () => {
    var { days, hours, minutes, seconds } = this.state;

    var now = new Date().getTime();
    var distance = this.state.newDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.setState({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    })
  } 

  render() {
    var { days, hours, minutes, seconds, newDate } = this.state
    var now = new Date().getTime();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time Left</h1>
          <div className="clock-input">
            <input type="date" name="time-to" className="time-to" id="time-to" value={dateFormat(newDate, 'yyyy-mm-dd')} onChange={(event) => this.calcTime(event)} />
          </div> <br/><br/>
          <div className="wrapper"> 
            <div className="clock-column">
              <p className="clock-day clock-timer">{newDate>now ? days : 'D'}</p>
              <p className="clock-label">Days</p>
            </div>
            <div className="clock-column">
              <p className="clock-hours clock-timer">{newDate>now ? hours : 'O'}</p>
              <p className="clock-label">Hours</p>
            </div>
            <div className="clock-column">
              <p className="clock-minutes clock-timer">{newDate>now ? minutes : 'N'}</p>
              <p className="clock-label">Minutes</p>
            </div>
            <div className="clock-column">
              <p className="clock-seconds clock-timer">{newDate>now ? seconds : 'E'}</p>
              <p className="clock-label">Seconds</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Countdown;
