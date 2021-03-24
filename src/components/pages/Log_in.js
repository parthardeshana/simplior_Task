import React, { Component } from 'react'
import BackgroundImage from '../shared/BackgroundImage';
import Login_Data from './Login_Data';

class Log_in extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <BackgroundImage />
                    <div className="col-md-6 w-50 mx-auto my-auto">
                        <h4 className="text-center mb-4"> <span style={{ color: "blue" }}>P</span>ROJECT</h4>
                        <Login_Data />
                    </div>
                </div>
            </div>
        )
    }
}

export default Log_in;