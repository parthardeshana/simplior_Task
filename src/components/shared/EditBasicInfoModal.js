import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditBasicInfoModal.css';
import { Modal } from 'react-bootstrap';
import db from '../../fire';

class EditBasicInfoModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            formalName: "",
            email: "",
            mobileNumber: "",
            birthday: "",
            plotNumber: "",
            state: "",
            society: "",
            country: "",
            location: "",
            zip: ""
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    // console.log("prev state", prevState, "next props", nextProps);
    // if (prevState !== nextProps.userInfo) {
    // if (prevState.firstName !== nextProps.userInfo.firstName) {
    // if (true) {

    // return {
    //     firstName: nextProps.userInfo.firstName,
    //     lastName: nextProps.userInfo.lastName,
    //     formalName: nextProps.userInfo.formalName,
    //     email: nextProps.userInfo.email,
    //     gender: nextProps.userInfo.gender,
    //     mobileNumber: nextProps.userInfo.mobileNumber,
    //     birthday: nextProps.userInfo.birthday,
    //     plotNumber: nextProps.userInfo.plotNumber,
    //     state: nextProps.userInfo.state,
    //     society: nextProps.userInfo.society,
    //     country: nextProps.userInfo.country,
    //     location: nextProps.userInfo.location,
    //     zip: nextProps.userInfo.zip
    // }

    // }
    // return null;
    // }

    modalCloseHandler() {
        this.props.closeModal();
    }

    updateBasicInfoHandler = () => {
        console.log("in database", this.state);
        db.collection("userInfo").doc(this.props.userId).update({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            formalName: this.state.formalName,
            email: this.state.email,
            gender: this.state.gender,
            mobileNumber: this.state.mobileNumber,
            birthday: this.state.birthday,
            plotNumber: this.state.plotNumber,
            state: this.state.state,
            society: this.state.society,
            country: this.state.country,
            location: this.state.location,
            zip: this.state.zip
        })
            .then(() => {
                console.log("Document successfully updated!");
                this.props.closeModal();
            });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log("my eventtt",e.target.value);
        // console.log("my stateett",this.state);
    }
    render() {
        console.log("in modal userIDDDDDDDD ", this.props.userId);
        let userInfo = this.props.userInfo;
        return (
            <div className="myModal">
                <Modal show={this.props.isEditClicked}>
                    <Modal.Header>
                        <div>
                            <h6>Edit Basic Info</h6>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Legal Name</label>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <input
                                            placeholder="First Name"
                                            name="firstName"
                                            className="mr-2"
                                            type="text"
                                            value={this.state.firstName}
                                            onChange={this.onChange}
                                        />
                                        <input
                                            placeholder="Last Name"
                                            type="text"
                                            name="lastName"
                                            value={this.state.lastName}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Formal Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        placeholder="Formal Name"
                                        style={{ width: "77%" }} className="mr-2"
                                        type="text"
                                        name="formalName"
                                        value={this.state.formalName}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Gender</label>
                                </div>
                                <div className="col-md-8" onChange={this.onChange} value={this.state.gender}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={this.state.gender}
                                        selected
                                        className="ml-3 mr-2"
                                    />Male
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={this.state.gender}
                                        className="ml-3 mr-2"
                                    />Female
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Date of Birth</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        placeholder="Date of Birth"
                                        style={{ width: "77%" }} className="mr-2"
                                        type="text"
                                        value={this.state.birthday}
                                        onChange={this.onChange}
                                        name="birthday"
                                    />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Mobile Number</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        placeholder="Mobile Number"
                                        style={{ width: "77%" }}
                                        type="text"
                                        value={this.state.mobileNumber}
                                        name="mobileNumber"
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Email Address</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Email Address"
                                        style={{ width: "77%" }}
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Address</label>
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px" }} name="plotNumber" placeholder="Plot No" className="mb-2" type="text" value={this.state.plotNumber} onChange={this.onChange} />
                                    <input style={{ width: "120px" }} name="state" placeholder="State" type="text" value={this.state.state} onChange={this.onChange} />
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px" }} name="society" placeholder="Society" className="mb-2" type="text" value={this.state.society} onChange={this.onChange} />
                                    <input style={{ width: "120px" }} name="country" placeholder="Country" type="text" value={this.state.country} onChange={this.onChange} />
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px", marginLeft: "2px" }} name="location" placeholder="City" className="mb-2" type="text" value={this.state.location} onChange={this.onChange} />
                                    <input style={{ width: "120px", marginLeft: "2px" }} name="zip" placeholder="Zip Code" type="text" value={this.state.zip} onChange={this.onChange} />
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-8">
                                    <button onClick={() => this.updateBasicInfoHandler()} className="btn btn-primary">Save</button>
                                    <button onClick={() => this.modalCloseHandler()} className="btn btn-outline-primary ml-2" >Cancel</button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default EditBasicInfoModal;