import React, { Component } from 'react'
import './Sign_up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import db from '../../fire';
import firebase from 'firebase';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class Sign_upwithRouter extends Component {
    state = {
        companyName: "",
        companyEmail: "",
        password: "",
        repeatPassword: "",
        isError: false,
        errors: {}
    }

    logInBtnClickHandler = (e) => {
        console.log('Sign up clicked')
        this.props.history.push("/login");
    }

    signUpBtnHandler = (e) => {
        const isValid = this.formValidation();
        !isValid &&
            firebase.auth().createUserWithEmailAndPassword(this.state.companyEmail, this.state.password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    db.collection('companyTable').add({
                        companyName: this.state.companyName,
                        companyEmail: this.state.companyEmail,
                        password: this.state.password
                    })
                        .then((docRef) => {
                            console.log("successfully data added", docRef.id);
                            alert("thank you signing with us")
                            this.props.history.push("/firstpage");
                        })
                        .catch((err) => {
                            console.error("erorr adding document", err)
                        })
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.error(error);
                });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    formValidation = () => {
        console.log('form validation is called');
        const { companyName, password, companyEmail, repeatPassword, isError } = this.state;

        let errors = {
        };
        if (!companyEmail) {
            errors.companyEmail = "Email required";
            this.setState({
                isError: true
            })
        } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(companyEmail.email)) {
            errors.companyEmail = "Email Address is invalid";
            this.setState({
                isError: true
            })
        }
        if (!password) {
            errors.password = "Password is required";
            this.setState({
                isError: true
            })
        } else if (password.length < 6) {
            errors.password = "Password Length needs to be 6 or more than 6 Characters"
            this.setState({
                isError: true
            })
        }
        if (!repeatPassword) {
            errors.repeatPassword = "Repeat Password is required";
            this.setState({
                isError: true
            })
        } else if (!(password === repeatPassword)) {
            errors.repeatPassword = "Password and repeat password should be match"
            this.setState({
                isError: true
            })
        }
        this.setState({ errors });
        return this.isError;
    }
    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        console.log("inside rendere fun", this.state.errors)
        const { companyName, password, companyEmail, repeatPassword, errors, isError } = this.state;
        return (
            <div className="mb-2 inputField w-50 mx-auto">
                <form onSubmit={this.onSubmit} >
                    <div className="mb-2 mx-auto">
                        <label>Company Name</label>
                        <input type="text"
                            className="form-control"
                            name="companyName"
                            value={companyName}
                            onChange={this.onChange} />
                    </div>
                    <div className="mb-2 mx-auto">
                        <label>Company Email</label>
                        <input type="email"
                            className="form-control"
                            name="companyEmail"
                            value={companyEmail}
                            onChange={this.onChange} />
                    </div>
                    {isError && <p className="errorMsg">{errors.companyEmail}</p>}
                    <div className="mb-2  mx-auto">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.onChange} />
                    </div>
                    {isError && <p className="errorMsg">{errors.password}</p>}
                    <div className="mb-2 mx-auto">
                        <label>Repeat Password</label>
                        <input type="password"
                            className="form-control"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={this.onChange} />
                    </div>
                    {isError && <p className="errorMsg">{errors.repeatPassword}</p>}
                    <button type="submit" onClick={() => this.signUpBtnHandler()} className=" mx-auto mt-1 btn btn-success btn-block">Sign Up</button>
                </form>
                <button onClick={() => this.logInBtnClickHandler()} className=" mx-auto mt-1 btn btn-primary btn-block">Sign In</button>
                <button className="mx-auto mt-3 btn btn-outline-success btn-block">sign up using Google  <FontAwesomeIcon className="ml-1" icon={faGoogle} /></button>
            </div>
        )
    }
}

const Sign_up = withRouter(Sign_upwithRouter);

export default Sign_up;