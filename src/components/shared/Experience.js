import React, { Component } from 'react'
import ExperirnceInfo from './ExperirnceInfo';
import TitleWithImg from './TitleWithImg';
import EditExperienceModal from '../shared/EditExperienceModal';
import { db } from '../../fire';

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditExperienceClicked: false,
            API_ExperienceInfo: {}
        }
    }
    database = () => {
        let tempArr = [];
        db.collection("experienceInfo")
            .where("email", "==", localStorage.getItem("logged_email"))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArr.push(doc.data());
                });
                this.setState({
                    API_ExperienceInfo: tempArr[0]
                })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
    }
    componentDidMount() {
        this.database();
    }

    editExpClickHandler() {
        this.setState({
            isEditExperienceClicked: true
        })
    }
    addExperienceInfoClickHandler = () => {

        // this.setState({
        //     isEditExperienceClicked: true
        // })
    }
    render() {
        const experienceInfo = this.state.API_ExperienceInfo;
        console.log("aaaaa", this.state.API_ExperienceInfo);

        return (
            <div>
                <div className="card p-3" >
                    <div className="d-flex justify-content-between">
                        <TitleWithImg title="Experience" />
                        <div className="m-2">
                            {this.state.API_ExperienceInfo ?
                                <a onClick={() => this.editExpClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Edit</a>
                                : <a onClick={() => this.addExperienceInfoClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Add Basic-Info</a>}
                        </div>
                    </div>
                    <ExperirnceInfo experienceInfo={this.state.API_ExperienceInfo} />
                </div>
                <EditExperienceModal isEditClicked={this.state.isEditExperienceClicked}
                    closeExperienceModal={() => this.setState({
                        isEditExperienceClicked: false
                    })} />
            </div>
        )
    }
}

export default Experience
