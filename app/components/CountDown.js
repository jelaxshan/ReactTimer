import React, {Component, PropTypes} from 'react';
import Clock from 'Clock';
import CountdownForm from './CountdownForm';


class Countdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  };

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
        switch (this.state.countdownStatus) {
          case 'started':
            this.startTimer();
            break;
        }
    }
  }

  startTimer = () => {
    this.timer = setInterval(() => {
    const newCount = this.state.count - 1;
    this.setState({
      count: newCount >= 0 ? newCount : 0
      });
      
    }, 1000);
  }

  render() {
    const {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
}

Countdown.propTypes = {

};

export default Countdown;