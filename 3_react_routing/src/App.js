import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ProfilePage from './pages/profile_page/ProfilePage';
import Theme from './pages/theme/Theme';
import Form from './pages/form/Form';
import Cities from './pages/cities/Cities';
import { FaBeer, FaHamsa } from 'react-icons/fa';



class App extends Component {

  state = {
    backgroundColor: undefined,
    welcomeMessage: <h1>Hello dear stranger. <FaBeer /></h1>
  }

  componentDidMount() {
    const welcomeMessageString = localStorage.getItem("welcomeMessage");
    if (welcomeMessageString) {
      const welcomeMessage = <h1>{welcomeMessageString}<FaHamsa /></h1>;
      this.setState({ welcomeMessage });
    }
  }


  onThemeChange = (backgroundColor) => {
    console.log("This is the color", backgroundColor);
    this.setState({ backgroundColor });
  }

  onNameChange = (firstName, lastName) => {
    if (firstName !== "" && lastName !== "") {
      const welcomeMessageString = `Welcome back ${firstName} ${lastName}`;
      const welcomeMessage = <h1>{welcomeMessageString}<FaHamsa /></h1>;
      this.setState({ welcomeMessage });
      localStorage.setItem("welcomeMessage", welcomeMessageString);
    }
  }

/*   handleThemeChange = (color) => {
    console.log("this is the color", color);

  } */



  render() {

    const { backgroundColor, welcomeMessage } = this.state;

    return (
      
      <Router>
        <div className="App" style={{backgroundColor}}>
          <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/theme">Theme</Link>
                </li>
                <li>
                  <Link to="/cities">Cities</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route exact path="/">
                {welcomeMessage}
              </Route>
              <Route path="/form" 
                component={(props) => <Form {...props} handleNameChange={this.onNameChange} />}/>
              <Route path="/profile" 
                component={ (props) => <ProfilePage {...props}/> }/>
              <Route path="/theme" 
                component={ (props) => <Theme {...props} handleThemeChange={this.onThemeChange}/> }/>
              <Route path="/cities" 
                component={(props) => <Cities {...props}/>}/>
            </Switch>

          </div>
        

        </Router>
    );
  }
}


export default App;
