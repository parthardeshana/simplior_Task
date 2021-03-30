import React, { Component } from 'react'
import microsoftLogo from '../../images/microsoft.png';

class ExperirnceInfo extends Component {
    render() {
        return (
            <div className="d-flex m-3">
                <div>
                    <img style={{ width: "80px" }} src={microsoftLogo} alt="" />
                </div>
                <div className="ml-3">
                    <h5> {this.props.designation}</h5>
                    <div className="d-flex">
                        <p className="mb-1 mr-2"> {this.props.experienceInfo.company}   </p>
                        <p className="mb-1 ml-2">|</p>
                        <p className="mb-1 ml-3"> {this.props.experienceInfo.jobType}</p>
                    </div>
                    <p className="mb-1">{this.props.experienceInfo.experience}</p>
                    <p className="mb-1">{this.props.experienceInfo.description}</p>
                </div>
            </div>
        )
    }
}

export default ExperirnceInfo
