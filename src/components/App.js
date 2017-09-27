import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <div className="main">
          <div className= "Mega">
            <h1 className= "display-3">BudgetBanking</h1>
            <p className= "lead">Banking on a Budget</p>
            <hr className= "my-4"/>
            <p>We take balling on a budget serious.</p>
            <p className= "lead">
              <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
            </p>
          </div>
        </div>
    );
  }
}

export default App;
