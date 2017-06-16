import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import '../App.css'

export default class Header extends Component {
  render() {
    return(
      <div className="container">
        <div className="container-fluid page-header">
          <h1>My Full Stack App<small>   Lets Get It</small></h1>

        </div>
        <div className="row nav-tabs container">
          <h4 className="col-md-3 col-sm-3 col-xs-3"><Link to='/'>Home</Link></h4>
          <h4 className="col-md-3 col-sm-3 col-xs-3"><Link to='/tab2'>Tab 2</Link></h4>
          <h4 className="col-md-3 col-sm-3 col-xs-3"><Link to='/tab3'>Tab 3</Link></h4>
          <h4 className="col-md-3 col-sm-3 col-xs-3"><Link to='/tab4'>Tab 4</Link></h4>

        </div>
      </div>
    )
  }
}
