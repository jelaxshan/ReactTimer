import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Countdown from 'Countdown';
import Timer from 'Timer';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown}/>
    <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);



