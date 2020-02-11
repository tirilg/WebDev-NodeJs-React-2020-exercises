import React, { Component } from 'react';
import Profile from './Profile';

class ProfilePage extends Component {
    render() {

        const razvanProfile = {
            name: "Razvan",
            hobby: "plants"
        }

        const miniProfile = {
            name: "Mini",
            hobby: "dad-jokes"
        }

        const larsProfile = {
            name: "Lars",
            hobby: "drinking himself sick"
        }

        const profiles = [razvanProfile, miniProfile, larsProfile];

        return(
            <div>
                <h1>Profile Page</h1>
                {profiles.map((profile, index ) => {
                    return <Profile key={'profile' + index} profileInfo={profile}/>;
                })}
            </div>
        );
    }
}

export default ProfilePage;