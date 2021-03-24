import React, { Component } from 'react'
import Sign_up from './Sign_up';
import Log_in from './Log_in';
import BackgroundImage from '../shared/BackgroundImage';

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <BackgroundImage />
                    <div className="col-md-6 w-50 mx-auto my-auto">
                        <h4 className="text-center mb-4"> <span style={{ color: "blue" }}>P</span>ROJECT</h4>
                        <Sign_up />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
