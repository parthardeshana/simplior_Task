import React, { Component } from 'react'
import Input_form from '../shared/Input_form';
import firebase from "firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { withRouter } from "react-router";
import { db, auth } from '../../fire';

class Log_inwithRouter extends Component {
    state = {
        apiData: {},
        isLogIn: false,
        name: "",
        photo: "",
        email: "",
        password: ""
    }
    logInWithGoogleHandler() {
        console.log("btn clicked sign in ");

    }
    componentDidMount() {
        let tempArr = [];
        db.collection('companyTable')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    tempArr.push(doc.data());
                })
            })
            .catch(error => console.log(error))
        this.setState({
            apiData: tempArr
        })
    }

    logInClickHandler = (e) => {
        e.prevantdefault()
        console.log("i am sign in page");
        console.log("my api data", this.state.apiData);
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then((userCredential) => {
        //         // Signed in
        //         console.log("logged in");
        //         // this.props.history.push("/firstpage");
        //         var user = userCredential.user;
        //     })
        //     .catch((error) => {
        //         error.preventdefault();
        //         var errorCode = error.code;
        //         var errorMessage = error.message;
        //         alert("enter password right");
        //     });

    }
    signUpBtnClickHandler = () => {
        console.log("i am sign up page");
        this.props.history.push("/");
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.prevantdefault();
    }
    render() {
        return (
            <div className="mb-2 inputField w-50 mx-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="mb-2 mx-auto">
                        <label>Company Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            value={this.state.companyEmail}
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-2  mx-auto">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <input className="mt-1 mr-2" type="checkbox" />
                            <p>Remind Me</p>
                        </div>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button onClick={() => this.logInClickHandler()} className=" mx-auto mt-3 btn btn-success btn-block">Sign In</button>
                </form>
                <button type="submit" onClick={() => this.signUpBtnClickHandler()} className=" mx-auto mt-2 btn btn-primary btn-block">Sign Up</button>
            </div>
        )
    }
}

const Login_Data = withRouter(Log_inwithRouter);
export default Login_Data;