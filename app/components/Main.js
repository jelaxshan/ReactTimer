  import React from 'react';
  import Navigation from './Navigation.js';

  class Main extends React.Component {
    render () {
      return (
        <div>
        <Navigation/>
          <div className='row'>
            <div className='column small-centered medium-6 large-4'>
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Main;
