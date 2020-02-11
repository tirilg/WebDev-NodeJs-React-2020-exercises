import React, { Component } from 'react';
import Wheels from './Wheels'

class BusPage extends Component {
    render() {

        const wheels = ['front left wheel', 'front right wheel', 'back left wheel', 'back right wheel'];

        return (
            <div>
                 {wheels.map((wheel, index ) => {
                    return <Wheels key={'wheel' + index} wheel={wheel}/>;
                })}
            </div>
        )
    }
}

export default BusPage;