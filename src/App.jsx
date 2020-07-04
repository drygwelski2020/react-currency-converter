import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Currency from './components/Currency'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Currency Conversion Tables</h1>
        <p className="lead">This is a currency conversion table</p>
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
