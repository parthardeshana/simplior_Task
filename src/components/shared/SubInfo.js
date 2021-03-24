import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhoneAlt, faEnvelope, faMapMarkerAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

class SubInfo extends Component {
    render() {
        return (
            <div className="d-flex m-2">
                <FontAwesomeIcon className="mt-1" icon={this.props.logo} />
                <div className="pl-3">
                    <p className="m-0">{this.props.name}</p>
                    <p style={{ color: "#4288E4" }} className="m-0">{this.props.details}</p>
                </div>
            </div>
        )
    }
}

export default SubInfo
