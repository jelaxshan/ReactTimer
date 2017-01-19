import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className = "top-bar">
       <div className = "top-bar-left">
        <ul className = "menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to = '/' activeClassName = 'active-link'>Timer</IndexLink>
          </li>
          <li>
            <Link to = '/countdown' activeClassName = 'active-link'>Counter</Link>
          </li>
        </ul>
       </div>
       <div className = "top-bar-right">
         <ul className = "menu">
           <li className= "menu-text">
            Created by Jelaxshan
           </li>
         </ul>
       </div>
        
      </div>
    );
  }
}

export default Navigation;