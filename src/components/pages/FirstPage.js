import React, { Component } from 'react';
import BasicInfo from '../shared/BasicInfo';
import Experience from '../shared/Experience';
import Navbar from '../shared/Navbar';
import { db } from '../../fire';

class FirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            API_userInfo: {},
            API_userId: ""
        }
    }

    databsae = () => {
        let tempArr = [];
        let userId = "";
        db.collection("userInfo")
            .where("email", "==", localStorage.getItem("logged_email"))
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    tempArr.push(doc.data());
                    userId = doc.id;
                });
                this.setState({
                    API_userInfo: {
                        ...tempArr[0]
                    },
                    API_userId: userId
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
        console.log("in first page", this.state);
        return (
            <>
                <div>
                    {/* {this.state.API_userInfo && this.state.API_userInfo.firstName} */}
                    <Navbar userInfo={this.state.API_userInfo.firstName} />
                    <BasicInfo userInfo={this.state.API_userInfo} userId={this.state.API_userId} />
                    <Experience />
                </div>
            </>
        )
    }

}

export default FirstPage;
