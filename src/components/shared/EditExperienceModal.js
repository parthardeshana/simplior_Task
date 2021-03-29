import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import './EditBasicInfoModal.css';
import { db } from '../../fire';

class EditExperienceModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            API_companyInfo: {},
            email: "",
            mobileNumber: "",
            employeeType: "",
            jobTy: ""
        }
    }
    componentDidMount() {
        this.databsae();
    }
    databsae = () => {
        let tempArr = [];
        db.collection("experienceInfo")
            .where("email", "==", localStorage.getItem("logged_email"))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArr.push(doc.data());
                });
                this.setState({
                    API_companyInfo: tempArr[0]
                })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
    }
    editExperienceModalCloseHandler() {
        this.props.closeExperienceModal();
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        console.log("company details ::: ", this.state.API_companyInfo);
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
                                    <input value={this.state.API_companyInfo.title} name="title" placeholder="Ex.Retail Sales Manager" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label> Employement Type</label>
                                </div>
                                <div className="col-md-8">
                                    <input placeholder="job Type" value={this.state.API_companyInfo.jobType} style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Company</label>
                                </div>
                                <div className="col-md-8">
                                    <input value={this.state.API_companyInfo.company} placeholder="Ex. Microsoft" style={{ width: "77%" }} className="mr-2" type="text" />
                                </div>
                            </div>
                            <div className="row m-2 mt-3">
                                <div className="col-md-4">
                                    <label>Location</label>
                                </div>
                                <div className="col-md-8">
                                    <input value={this.state.API_companyInfo.location} placeholder="Location" style={{ width: "77%" }} className="mr-2" type="text" />
                                    <p className="mb-0" value={this.state.API_companyInfo.headline}></p>
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
                                            <option value="2021" >2021</option>
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
