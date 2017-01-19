import React, {Component, PropTypes} from 'react';
import Clock from 'Clock';
import CountdownForm from './CountdownForm';


class Countdown extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      count: 0
    };
  };

  handleSetCountdown = (seconds) => {
    this.setState({
      count: seconds
    });
  };

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