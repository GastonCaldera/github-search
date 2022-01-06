import React from 'react';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/templates/Dashboard'
import UserInfo from './components/templates/UserInfo'

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Routes >
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/user/:id" exact element={<UserInfo />} />
      </Routes >
    </Router>
  );
}

export default App;
