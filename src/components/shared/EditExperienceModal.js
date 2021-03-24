import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './EditBasicInfoModal.css';

class EditExperienceModal extends Component {
    constructor(props) {
        super(props)
    }

    editExperienceModalCloseHandler() {
        this.props.closeExperienceModal();
    }
    render() {
        return (
            <div className="myModal">
                <Modal show={this.props.isEditClicked}>
                    <Modal.Header>
                        <div>
                            <h6>Edit Experience</h6>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="">
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Title</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Ex.Retail Sales Manager" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Employement Type</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Formal Name" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Company</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Ex. Microsoft" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Location</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Location" style={{ width: "77%" }} className="mr-2" type="text" />
                                    <p className="mb-0">I am currently working in this role</p>
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Headline</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="Ex. Microsoft" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>

                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-8">
                                    <div className="d-flex">
                                        <label> Start Date</label>
                                        <label style={{ marginLeft: "119px" }} > End Date</label>
                                    </div>
                                    <div className="d-flex">
                                        <select className="form-select ExpMonthModal" aria-label="Default select example">
                                            <option selected>Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="3">April</option>
                                            <option value="3">May</option>
                                            <option value="3">June</option>
                                            <option value="3">July</option>
                                        </select>
                                        <select className="form-select ExpYearModal" aria-label="Default select example">
                                            <option selected>Year</option>
                                            <option value="1">2021</option>
                                            <option value="2">2020</option>
                                            <option value="3">2019</option>
                                            <option value="3">2018</option>
                                            <option value="3">2017</option>
                                            <option value="3">2016</option>
                                            <option value="3">2015</option>
                                        </select>
                                        <select className="form-select ExpMonthModal" aria-label="Default select example">
                                            <option selected>Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="3">April</option>
                                            <option value="3">May</option>
                                            <option value="3">June</option>
                                            <option value="3">July</option>
                                        </select>
                                        <select className="form-select ExpYearModal" aria-label="Default select example">
                                            <option selected>Year</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-8">
                                    <button className="btn btn-primary">Save</button>
                                    <button onClick={() => this.editExperienceModalCloseHandler()} className="btn btn-outline-primary ml-2" >Cancel</button>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>

        )
    }
}

export default EditExperienceModal
