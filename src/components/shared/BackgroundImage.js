import React, { Component } from 'react'
import illustration from '../../images/illustrationB.jpg';

class BackgroundImage extends Component {
    render() {
        return (
            <div className="col-md-6">
                <img style={{ width: "100%", height: "100vh" }} src={illustration} className="illustration-img p-1" alt="illustration img" />
            </div>
        )
    }
}

export default BackgroundImage;
