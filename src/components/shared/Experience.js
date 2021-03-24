import React, { Component } from 'react'
import ExperirnceInfo from './ExperirnceInfo';
import TitleWithImg from './TitleWithImg';
import EditExperienceModal from '../shared/EditExperienceModal';
import userObj from '../../api/employeeList';

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditExperienceClicked: false,
            myData: {}
        }
    }
    componentDidMount() {
        userObj.getData(5).then((data) => {
            this.setState({
                myData: data
            })
        })
    }

    editExpClickHandler() {
        this.setState({
            isEditExperienceClicked: true
        })
    }
    render() {
        return (
            <div>
                <div className="card p-3" >
                    <div className="d-flex justify-content-between">
                        <TitleWithImg title="Experience" />
                        <div className="m-2">
                            <a onClick={() => this.editExpClickHandler()} className="text-decoration-none" style={{ fontSize: "16px" }} href="#">Edit</a>
                        </div>
                    </div>
                    <ExperirnceInfo designation="Sr. Developer" company="Microsoft" jobType="Full Time" experince="Jul 2019 - Dec 2020 " description="At Microsoft I am working on React.js Developer" />
                    <ExperirnceInfo designation="software Developer" company="Google" jobType="Part Time" experince="Sep 2015 - Jul 2019 3 yr 11 mos" description="At Google I am working on JAVA Developer and machine lernig." />
                    <ExperirnceInfo designation="software Developer" company="Google" jobType="Part Time" experince="Sep 2015 - Jul 2019 3 yr 11 mos" description="At Google I am working on JAVA Developer and machine lernig." />
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
