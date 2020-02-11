import React, { Component } from 'react';

class Profile extends Component {
    render() {
        // Destructuring assignment
        const { name, hobby } = this.props.profileInfo;

        console.log("hello", this.props);
        return(
            <div>
                <h1>Profile</h1>
                <p>Hello {name}.</p>
                <p>My hobby is {hobby}.</p>
            </div>
        );
    }

}

export default Profile;