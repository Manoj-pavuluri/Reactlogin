import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Loginpage from './loginPage';
import EmployeeListPage from './employeeListPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Loginpage} />
        <Route exact path='/employeeListPage' component={EmployeeListPage} />
      </Switch>
    </div>
  );
}

