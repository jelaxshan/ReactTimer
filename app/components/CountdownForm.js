import React, {Component, PropTypes} from 'react';

class CountdownForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      inputValue: ''
    };
  };

  handleUserInput = (input) => {
    this.setState({
      inputValue: input.target.value
    });
  };

  onSubmit = (e) => {
  e.preventDefault();
  const stringSeconds = this.state.inputValue;

  if (stringSeconds.match(/^[0-9]*$/)) {
    this.state.inputValue = '';
    this.props.onSetCountdown(parseInt(stringSeconds, 10));
    }
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className='countdown-form'>
          <input type="text" value={this.state.inputValue} onChange={this.handleUserInput} placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {

};

export default CountdownForm;
