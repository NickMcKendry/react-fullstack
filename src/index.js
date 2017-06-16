import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './Layout';
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
import Tab4 from './components/Tab4'


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' activeClassName="active-link" component = { Layout } />
      <Route  path='/tab2/:article?' activeClassName="active-link" component = { Tab2 } />
      <Route  path='/tab3' activeClassName="active-link" component = { Tab3 } />
      <Route  path='/tab4' activeClassName="active-link" component = { Tab4 } />
    </div>
  </Router>,
  document.getElementById('root'));
