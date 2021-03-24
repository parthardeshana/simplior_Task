import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditBasicInfoModal.css';
import { Modal } from 'react-bootstrap';

class EditBasicInfoModal extends Component {
    constructor(props) {
        super(props)

    }
    modalCloseHandler() {
        this.props.closeModal();
    }

    render() {
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
                                        <input placeholder="First Name" className="mr-2" type="text" />
                                        <input placeholder="Last Name" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Formal Name</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Formal Name" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Gender</label>
                                </div>
                                <div className="col-md-8">
                                    <input type="radio" name="gender" className="ml-3" />
                                    <label className="m-2">Male</label>
                                    <input type="radio" name="gender" className="ml-3" />
                                    <label className="m-2">Female</label>
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Date of Birth</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Date of Birth" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Phone Number</label>
                                </div>
                                <div className="col-md-1">
                                    <select className="form-select" aria-label="Default select example">+91
                                            <option selected>+91</option>
                                        <option value="1">+65</option>
                                        <option value="2">+62</option>
                                        <option value="3">+96</option>
                                        <option value="3">+22</option>
                                        <option value="3">+39</option>
                                        <option value="3">+46</option>
                                    </select>
                                </div>
                                <div className="col-md-7">
                                    <input className="ml-3" style={{ width: "70%" }} placeholder="Mobile Number" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Email Address</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Email Address" style={{ width: "77%" }} type="email" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Address</label>
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px" }} placeholder="Plot No" className="mb-2" type="text" />
                                    <input style={{ width: "120px" }} placeholder="State" type="text" />
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px" }} placeholder="Society" className="mb-2" type="text" />
                                    <input style={{ width: "120px" }} placeholder="Country" type="text" />
                                </div>
                                <div className="col-md-2">
                                    <input style={{ width: "120px", marginLeft: "2px" }} placeholder="City" className="mb-2" type="text" />
                                    <input style={{ width: "120px", marginLeft: "2px" }} placeholder="Zip Code" type="text" />
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-8">
                                    <button className="btn btn-primary">Save</button>
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
