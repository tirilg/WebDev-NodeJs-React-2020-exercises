import React, { Component } from 'react';

class Wheels extends Component {
    render() {
        // Destructuring assignment
        const {wheel} = this.props;
        return(
            <div>
                <h1>{wheel}</h1>
            </div>
        );
    }

}

export default Wheels;