import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProfilePage from './pages/profile_page/ProfilePage';
import Theme from './pages/theme/Theme';



class App extends Component {


  handleBtnClicked = (color) => {
    console.log(color);
  }



  render() {
    return (
      
      <Router>
        <div className="App">
          <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/theme">Theme</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                <h1>This is the index route</h1>
              </Route>
              <Route path="/profile" component={ (props) => <ProfilePage {...props}/> }/>
              <Route path="/theme" component={ (props) => <Theme onBtnClicked={this.handleBtnClicked} {...props}/> }/>
              {/* <Route path="/profile" component={(props) => <h1>This is the profile page</h1>}/> */}

            </Switch>

          </div>
        

        </Router>
    );
  }
}


export default App;
