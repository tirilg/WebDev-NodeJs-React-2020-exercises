import React, { Component } from 'react';
import "./Button.css"

class ButtonWithChildren extends Component {

    render() {
        console.log(this.props)

        const { children } = this.props
        return(
            <button className="childBtn">{ children ? children : "click" }</button>
        );
    }
}

export default ButtonWithChildren;