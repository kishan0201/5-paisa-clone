import React, { Component} from 'react';
import Navigation from './Navigation';
import Orders from './Orders';
import Holdings from './Holdings';
import Position from './Positions';
import Funds from './Funds';
import Profile from './Profile';
import OrderStatus from './OrderStatus';
import DashBoard from './DashBoard'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { DashboardOutlined } from '@material-ui/icons';

class DashBoardRouter extends Component {
  render () {
    return (    
        <div className="App">
          <Router>
            <Route path= "/" exact component= {DashBoard} />
            <Route path= "/orders" component= {DashBoard}/>
            <Route path= "/holdings" component={DashBoard} />
            <Route path= "/positions" component={DashBoard} />
            <Route path= "/funds" component= {DashBoard} />
            <Route path= "/profile" component= {DashBoard} />
            <Route path= "/orderstatus" component= {DashBoard} />
            <Route path= "/logout" component= {DashBoard} />
          </Router>
        </div>
     
    )
  }
}

export default DashBoardRouter