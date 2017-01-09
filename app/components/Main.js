  import React from 'react';
  import Navigation from './Navigation.js';

  class Main extends React.Component {
    render () {
      return (
        <div>
          <div>
            <div>
            <Navigation />
              <p>Main.jsx Rendered</p>
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Main;
