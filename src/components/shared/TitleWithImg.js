import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class TitleWithImg extends Component {
    render() {
        return (
            <div className="d-flex ">
                <FontAwesomeIcon className="m-2" style={{ fontSize: "29px", color: "#4288E4" }} icon={faUserCircle} />
                <p className="m-2" style={{ fontSize: "16px", fontWeight: "600" }}>{this.props.title}</p>
            </div>
        )
    }
}

export default TitleWithImg
