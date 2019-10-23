import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import './App.css';
import Registration from './pages/registration';
import Dashboard from './pages/dashboard';
import Resetpassword from './pages/resetpassword';
import Forgotpassword from './pages/forgotpassword';

function App() {
  return (

    <Router>

      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/resetpassword' component={Resetpassword} />
        <Route path='/forgotpassword' component={Forgotpassword} />
      </Switch>

    </Router>

  );
}

export default App;
