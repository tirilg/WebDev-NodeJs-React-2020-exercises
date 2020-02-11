import React from 'react';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import BusPage from './components/bus_page/BusPage';

class App extends React.Component {
  constructor(props) {
    //props = inherited data
    super(props);
    //state = data that exists within the component
    this.state = {
      navpage: 'buspage',
      clicked: false

    };
  }

  onNavBtnClicked = (navpage) => {
    this.setState({
      navpage
    });
  };

  onDivClick = (clicked) => {
    this.setState({
      clicked
    });
  }

  render() {

    const { navpage, clicked } = this.state;

    let pageToShow = 'buspage';


   /*  if(navpage === 'buspage') {
      pageToShow = <BusPage/>

    } else {
      pageToShow = <ProfilePage/>
    } */

    console.log(this.state);
    return (
      <div className="App">
        <div onClick={() => this.onDivClick(true)} className="box">
          <button onClick={() => this.onNavBtnClicked('buspage')}>Bus page</button>
          <button onClick={() => this.onNavBtnClicked('profilepage')}>Profile page</button>
          {pageToShow}
        </div>
      </div>
    );
  }
}

export default App;
