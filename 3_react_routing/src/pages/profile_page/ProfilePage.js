import React, { Component } from 'react';

class ProfilePage extends Component {

    handleRedirect = () => {
        this.props.history.push("/")
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Profile page</h1>

                <button onClick={this.handleRedirect}>Redirect to home</button>
            </div>
        )
    }
}

export default ProfilePage;