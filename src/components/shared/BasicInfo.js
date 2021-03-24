import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhoneAlt, faEnvelope, faMapMarkerAlt, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import SubInfo from './SubInfo';
import TitleWithImg from './TitleWithImg';
import EditBasicInfoModal from '../shared/EditBasicInfoModal';

class BasicInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditBasicInfoClicked: false
        }
    }

    editBasicInfoClickHandler() {
        this.setState({
            isEditBasicInfoClicked: true
        })
    }
    render() {
        // console.log(this);
        return (
            <div className="card p-3" >
                <div className="d-flex justify-content-between">
                    <TitleWithImg title="Basic Info" />
                    <div className="m-2">
                        <a onClick={() => this.editBasicInfoClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Edit</a>
                    </div>
                </div>
                <hr />
                <div className="d-flex m-3">
                    <div>
                        <FontAwesomeIcon className="" style={{ fontSize: "69px", color: "#4288E4" }}
                            icon={faUserCircle} />
                    </div>
                    <div className="ml-3 mt-2">
                        <div className="ml-3">
                            <h5 className="m-2">User Name</h5>
                            <div className="m-2" style={{ color: "#6C7293", opacity: "1" }}>
                                <div className="d-flex">
                                    <p className="mb-1 mr-2">Web Designer(Full Time)  </p>
                                    <p className="mb-1 ml-2">|</p>
                                    <p className="mb-1 ml-3"> Started on August 15th, 2020</p>
                                </div>
                                <p className="m-0">Ahemdabad, Gujarat, india.</p>
                            </div>
                        </div>
                        <SubInfo logo={faPhoneAlt} name="Phone No." details="+91 0123 456 789" />
                        <SubInfo logo={faMapMarkerAlt} name="Address" details="123, Galaxy signature, Scincity Road, Sola, Ahmedabad, Gujarat, 320012." />
                        <SubInfo logo={faEnvelope} name="Email" details="johndeo@simplior.com" />
                        <SubInfo logo={faBirthdayCake} name="Birthday" details="Jan 15" />
                    </div>
                </div>
                <EditBasicInfoModal isEditClicked={this.state.isEditBasicInfoClicked}
                    closeModal={() => this.setState({
                        isEditBasicInfoClicked: false
                    })}
                />
            </div>
        )
    }
}

export default BasicInfo
