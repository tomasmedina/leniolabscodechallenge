import React from 'react';
import Congress from './containers/Congress';
import MemberDetail from './containers/MemberDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';


const NotFound = () => <div>Oops, there's nothing here!</div>;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Members of Congress
        </h1>
      </header>
      <Router>
        <Switch>
          <Route path="/leniolabscodechallenge" exact component={Congress} />
          <Route path="/member/:memberId" exact component={MemberDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <footer className="App-footer">
        <h3>A footer</h3>
      </footer>
    </div>)

}

export default App;
