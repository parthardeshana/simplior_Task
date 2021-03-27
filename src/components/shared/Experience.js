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
                console.log("i am queryshot data", tempArr[0]);
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
    render() {
        console.log("in render exp info", this.state.API_ExperienceInfo);
        const experienceInfo = this.state.API_ExperienceInfo;
        return (
            <div>
                <div className="card p-3" >
                    <div className="d-flex justify-content-between">
                        <TitleWithImg title="Experience" />
                        <div className="m-2">
                            <a onClick={() => this.editExpClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Edit</a>
                        </div>
                    </div>
                    <ExperirnceInfo designation={experienceInfo.title} company={experienceInfo.company} jobType={experienceInfo.jobType} experince={experienceInfo.experince} description={experienceInfo.description} />
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
