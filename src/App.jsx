import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Currency from './components/Currency'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Currency Conversion Table</h1>
        <p className="lead">
          ** This table will show the currency conversion amounts based on the
          U.S. Dollar ($1.00) **
        </p>
        <hr className="my-4" />
        <hr className="my-4" />
        <Router>
          <Switch>
            <Route exact path="/">
              <Currency />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}
export default App
