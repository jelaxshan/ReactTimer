import React, {Component, PropTypes} from 'react';

class CountdownForm extends Component {

  onSubmit = (e) => {
  e.preventDefault();
  const stringSeconds = this.refs.seconds.value;

  if (stringSeconds.match(/^[0-9]*$/)) {
    this.refs.seconds.value = '';
    this.props.onSetCountdown(parseInt(stringSeconds, 10));
    }
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className='countdown-form'>
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {

};

export default CountdownForm;
