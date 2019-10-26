import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/login';
import './App.css';
import Registration from './pages/registration';
import Dashboard from './pages/dashboard';
import Resetpassword from './pages/resetpassword';
import Forgotpassword from './pages/forgotpassword';
import Side_navigation_bar from './components/side_navigation_bar';
import Archive from './components/archive';
import Trash from './components/trash';
import Reminder from './components/reminder';
import Note_toolbar_menu from './components/note_toolbar_menu';
import Note_card from './components/note_card';
import Add_collaborator from './components/add_collaborator';
import Color from './components/color';

function App() {
  return (
    <Router>

      <Switch>

        <Route path='/' exact component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/resetpassword' component={Resetpassword} />
        <Route path='/forgotpassword' component={Forgotpassword} />
        <Route path='/sidenave' component={Side_navigation_bar} />
        <Route path='/archive' component={Archive} />
        <Route path='/trash' component={Trash} />
        <Route path='/reminder' component={Reminder} />
        <Route path='/toolbarmenu' component={Note_toolbar_menu} />
        <Route path='/notecard' component={Note_card} />
        <Route path='/color' component={Color} />
        <Route path='/collaborator' component={Add_collaborator} />

      </Switch>

    </Router>
  );
}

export default App;
