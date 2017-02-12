import React, { Component, PropTypes } from "react";

class Controls extends Component {
  onStatusChange = (newStatus) => {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  renderStartStopButton = () => {
    const { countdownStatus } = this.props;
  
      if (countdownStatus === "started") {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else if (countdownStatus === "paused") {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }
    };

  render() {
    
      return (
        <div className="controls">
          {this.renderStartStopButton()}
          <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>
      );
    
  }
  }


Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
};

export default Controls;
