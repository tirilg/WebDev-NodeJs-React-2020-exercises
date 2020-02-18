import React from 'react';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import BusPage from './components/bus_page/BusPage';
import ButtonWithProps from './components/button/ButtonWithProps';
import FrontPage from './components/front_page/FrontPage';
import ButtonWithChildren from './components/button/ButtonWithChildren';

class App extends React.Component {
  constructor(props) {
    //props = inherited data
    super(props);
    //state = data that exists within the component
    this.state = {
      pageToRender: <FrontPage />,
      clicked: false

    };
  }

  handleNavBtnClicked = (navpage) => {
    //dont use this method when you have many pages
    //changed to setting the state directly in the button
    if(navpage === 'buspage') {
      this.setState({pageToRender: <BusPage />});
    } else if (navpage === 'profilepage') {
      this.setState({pageToRender: <ProfilePage />});
    } else if (navpage === 'frontpage') {
      this.setState({pageToRender: <FrontPage />});
    }
  };

  handleDivClick = (clicked) => {
    this.setState({
      clicked
    });
  }

  handleBtnClicked = (text) => {
    console.log(text);
  }

  render() {

    const { pageToRender } = this.state;

    return (
      <div className="App">
       {/*  <ButtonWithProps buttonText={"Submit"} customStyle={{backgroundColor: "red"}} 
                          onBtnClicked={() => this.handleBtnClicked("Test")}/> */}
        <div onClick={() => this.handleDivClick(true)} className="box">
          {/* <button onClick={() => this.handleNavBtnClicked('frontpage')}>Front page</button> */}
          <ButtonWithProps onBtnClicked={() => this.setState({pageToRender: <FrontPage />})} buttonText={"Home"}>Front page</ButtonWithProps> 
          <ButtonWithProps onBtnClicked={() => this.setState({pageToRender: <BusPage />})} buttonText={"Bus"}>Bus page</ButtonWithProps>
          <ButtonWithProps onBtnClicked={() => this.setState({pageToRender: <ProfilePage />})} buttonText={"Profile"}>Profile page</ButtonWithProps>
          { pageToRender }
          <ButtonWithChildren>Dynamic text</ButtonWithChildren>
        </div>
      </div>
    );
  }
}

export default App;
