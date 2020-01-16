import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import TradeDecomposition from './components/TradeDecomposition'
import BudgetPlanning from './components/BudgetPlanning'
class App extends Component {
  constructor(props) {
    debugger
    super(props)
    console.log('Props', props)
  }
  render() {
    return <div className="App">
      <Header />
      <SideBar />
      <Switch>
        <div
          style={{
            margin: "60px 25px 10px 25px"
          }}
        >
          <Route exact path="/tradeDecomposition" component={TradeDecomposition} />
          <Route exact path="/budgetPlanning" component={BudgetPlanning} />
        </div>
      </Switch>
    </div>
  }
}

export default withRouter(App);
