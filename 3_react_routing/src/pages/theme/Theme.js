import React, { Component } from 'react';

class Theme extends Component {

   state = {
       color: undefined
   };

    render() {

    
        return(
            <div>
                <input type="color" onChange={(event) => this.setState({color: event.target.value})}/>
                <button onClick={() => this.props.handleThemeChange(this.state.color)}>Submit color</button>
            </div>
        );
    }
}

export default Theme;