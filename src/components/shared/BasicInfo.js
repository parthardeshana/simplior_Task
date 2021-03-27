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
        const userInfo = this.props.userInfo;
        let mergeAddress = `${userInfo.plotNumber}, ${userInfo.society}, ${userInfo.location}, ${userInfo.state} ${userInfo.zip}`;
        console.log("address", mergeAddress);
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
                            <h5 className="m-2"> {userInfo.firstName} {userInfo.lastName}</h5>
                            <div className="m-2" style={{ color: "#6C7293", opacity: "1" }}>
                                <div className="d-flex">
                                    <p className="mb-1 mr-2">{userInfo.designation} <span> ({userInfo.jobType})</span>  </p>
                                    <p className="mb-1 ml-2">|</p>
                                    <p className="mb-1 ml-3"> {userInfo.startDate}</p>
                                </div>
                                <p className="m-0">{userInfo.location}, {userInfo.country}</p>
                            </div>
                        </div>
                        <SubInfo logo={faPhoneAlt} name="Phone No." details={userInfo.phone} />
                        <SubInfo logo={faMapMarkerAlt} name="Address" details={mergeAddress} />
                        <SubInfo logo={faEnvelope} name="Email" details={userInfo.email} />
                        <SubInfo logo={faBirthdayCake} name="Birthday" details={userInfo.birthday} />
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
