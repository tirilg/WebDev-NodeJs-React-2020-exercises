import React, { Component } from 'react';

class Theme extends Component {

   state = {
       color: undefined
   };

    render() {

        console.log(this.props)
        const { onBtnClicked } = this.props;
        const { color } = this.state
        console.log(this.state)
        return(
            <div>
                <input type="color" onChange={(event) => this.setState({color: event.target.value})}/>
                <button onClick={() => onBtnClicked(color)}>Submit color</button>
            </div>
        );
    }
}

export default Theme;