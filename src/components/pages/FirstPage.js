import React, { Component } from 'react';
import BasicInfo from '../shared/BasicInfo';
import Experience from '../shared/Experience';
import Navbar from '../shared/Navbar';
import { db } from '../../fire';

class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            API_userInfo: {}
        }
    }

    databsae = () => {
        let tempArr = [];
        db.collection("userInfo")
            .where("email", "==", localStorage.getItem("logged_email"))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArr.push(doc.data());
                });
                this.setState({
                    API_userInfo: tempArr[0]
                })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
    }
    componentDidMount() {
        this.databsae();
    }

    render() {
        // console.log("state userinfo store 0000000", this.state.API_userInfo);
        return (
            <>
                <div>
                    <Navbar userInfo={this.state.API_userInfo.firstName} />
                    <BasicInfo userInfo={this.state.API_userInfo} />
                    <Experience />
                </div>
            </>
        )
    }

}

export default FirstPage;
