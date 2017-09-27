import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


class App extends Component {
  render() {
    return (

        <div className="main">
          <div className= "jumbotron">
            <h1 className= "display-1">Peoples Bank</h1>
            <p className="col-sm-9 offset-sm-3">Banking on a Budget</p>
            <hr className= "my-10"/>
            <p className= "display-4.5">We take banking on a budget serious</p>
            <p className= "display-4">
              <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
              </p>
            </div>
        </div>


    );
  }
}

export default App;
