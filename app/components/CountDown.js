import React, {Component, PropTypes} from 'react';
import Clock from 'Clock';

class Countdown extends Component {
  render() {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
}

Countdown.propTypes = {

};

export default Countdown;