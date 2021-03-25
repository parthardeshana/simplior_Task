import React, { Component } from 'react';
import BasicInfo from '../shared/BasicInfo';
import Experience from '../shared/Experience';
import Navbar from '../shared/Navbar';
import { db } from '../../fire';

class FirstPage extends Component {
    state = {
        user: []
    }
    componentDidMount() {
        // console.log("iiiiiiii ppp location", this.props.location)
        // if (this.props.location.state === undefined) {
        //     this.props.history.replace("/login");
        // }
        // let tempArr = [];
        // db.collection('userInfo')
        //     .where("email", "==", this.props.location.state.companyEmail)
        //     .get()
        //     .then(querySnapshot => {
        //         querySnapshot.forEach(doc => {
        //             tempArr.push(doc.data());
        //         })
        //         if (tempArr.length == 0) {
        //             let tempArr2 = [];
        //             db.collection('companyInfo')
        //                 .where("companyEmail", "==", this.props.location.state.companyEmail)
        //                 .get()
        //                 .then(querySnapshot => {
        //                     querySnapshot.forEach(doc => {
        //                         tempArr2.push(doc.data());
        //                     })
        //                     console.log("temp arr 2", tempArr2);
        //                     this.setState({
        //                         user: tempArr2
        //                     })
        //                 })
        //                 .catch(error => console.log(error))
        //         } else {
        //             this.setState({
        //                 user: tempArr
        //             })
        //         }
        //     })
        //     .catch(error => console.log(error))
    }

    render() {
        return (
            <>
                <div>
                    {/* <Navbar user={this.props.location.state} /> */}
                    <Navbar user={this.state.user} />
                    <BasicInfo />
                    <Experience />
                </div>
            </>
        )
    }
}

export default FirstPage;
