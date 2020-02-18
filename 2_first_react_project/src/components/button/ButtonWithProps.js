import React, { Component }  from 'react';
import "./Button.css"

class ButtonWithProps extends Component {
    render() {
        //props should be in the render when there will be changes
        //constructor only gets the props once

        const { buttonText, customStyle, onBtnClicked } = this.props
        //console.log(this.props)

        return(
            <div>
                <button className="propBtn" style={ customStyle } onClick={onBtnClicked}>
                    { buttonText ? buttonText : "Click"}
                </button>
            </div>
        )

    }
}

export default ButtonWithProps;