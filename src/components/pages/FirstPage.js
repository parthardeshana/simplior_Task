import React, { Component } from 'react';
import BasicInfo from '../shared/BasicInfo';
import Experience from '../shared/Experience';
import Navbar from '../shared/Navbar';
import EditExperienceModal from '../shared/EditExperienceModal';
import { db, auth } from '../../fire';

class FirstPage extends Component {
    state = {
        users: null,
        currentUser: {}
    }
    componentDidMount() {
        let tempArr = [];
        db.collection('userInfo')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    tempArr.push(doc.data());
                })
            })
            .catch(error => console.log(error))
        this.setState({
            users: tempArr
        })
    }

    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <BasicInfo />
                    <Experience />
                </div>
            </>
        )
    }
}

export default FirstPage;
