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
            userInfo: {},
            userId: "",
            isEditBasicInfoClicked: false
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.warn("hooks", props, state)
        return {
            userInfo: props.userInfo,
            userId: props.userId
        };
    }

    editBasicInfoClickHandler() {
        this.setState({
            isEditBasicInfoClicked: true
        })
    }
    render() {
        // const userInfo = this.props.userInfo;
        const userId = this.props.userId;
        let mergeAddress = `${this.state.userInfo.plotNumber}, ${this.state.userInfo.society}, ${this.state.userInfo.location}, ${this.state.userInfo.state} ${this.state.userInfo.zip}`;
        return (
            <div className="card p-3" >
                <div className="d-flex justify-content-between">
                    <TitleWithImg title="Basic Info" />
                    <div className="m-2">
                        {this.props.userInfo ?
                            <a onClick={() => this.editBasicInfoClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Edit</a>
                            : <a onClick={() => this.addBasicInfoClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Add Basic-Info</a>}
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
                            <h5 className="m-2"> {this.state.userInfo.firstName} {this.state.userInfo.lastName}</h5>
                            <div className="m-2" style={{ color: "#6C7293", opacity: "1" }}>
                                <div className="d-flex">
                                    <p className="mb-1 mr-2">{this.state.userInfo.designation} <span> ({this.state.userInfo.jobType})</span>  </p>
                                    <p className="mb-1 ml-2">|</p>
                                    <p className="mb-1 ml-3"> {this.state.userInfo.startDate}</p>
                                </div>
                                <p className="m-0">{this.state.userInfo.location}, {this.state.userInfo.country}</p>
                            </div>
                        </div>
                        <SubInfo logo={faPhoneAlt} name="Phone No." details={this.state.userInfo.mobileNumber} />
                        <SubInfo logo={faMapMarkerAlt} name="Address" details={mergeAddress} />
                        <SubInfo logo={faEnvelope} name="Email" details={this.state.userInfo.email} />
                        <SubInfo logo={faBirthdayCake} name="Birthday" details={this.state.userInfo.birthday} />
                    </div>
                </div>
                <EditBasicInfoModal userId={this.state.userId} userInfo={this.state.userInfo} isEditClicked={this.state.isEditBasicInfoClicked}
                    closeModal={() => this.setState({
                        isEditBasicInfoClicked: false
                    })}
                />
            </div>
        )
    }
}

export default BasicInfo
