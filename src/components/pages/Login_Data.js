import React, { Component } from 'react'
import Input_form from '../shared/Input_form';
import firebase from "firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { withRouter } from "react-router";
import { db, auth } from '../../fire';

class Log_inwithRouter extends Component {

    state = {
        companyEmail: "",
        password: "",
        isError: false,
        API_companyInfo: {},
        errors: {}
    }

    database_API = () => {
        let tempArr = [];
        db.collection("companyInfo")
            .where("email", "==", this.state.companyEmail)
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

    onSubmit = (e) => {
        e.preventDefault();

        const isInvalid = this.formValidation();
        if (!isInvalid) {
            // calling api 
            this.database_API();
            // if (this.state.companyEmail == this.state.API_companyInfo.companyEmail &&
            //     this.state.password == this.state.API_companyInfo.password) {
            if (true) {
                console.log("you are log in ==>>>>>>>>");
                console.log(this.state.API_companyInfo.companyEmail, this.state.API_companyInfo.password)
                localStorage.setItem('logged_email', this.state.companyEmail);
                console.log("your loged email id is ", this.state.companyEmail);
                this.props.history.push("/firstpage");
            }
            else {
                alert("incorrect username or password!! Try Again");
                localStorage.setItem('logged_email', undefined);
            }
        }
    }
    signUpBtnClickHandler = () => {
        this.props.history.push("/");
    }
    formValidation = () => {
        const { password, companyEmail, isError } = this.state;

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
        this.setState({ errors });
        return this.isError;
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        console.log("teessssssssttttttttttttting", this.state.API_companyInfo);
        const { password, companyEmail, errors, isError } = this.state;
        return (
            <div className="mb-2 inputField w-50 mx-auto">
                <form onSubmit={this.onSubmit}>
                    <div className="mb-2 mx-auto">
                        <label>Company Email</label>
                        <input type="text"
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
                            value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    {isError && <p className="errorMsg">{errors.password}</p>}
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <input className="mt-1 mr-2" type="checkbox" />
                            <p>Remind Me</p>
                        </div>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button className=" mx-auto mt-3 btn btn-success btn-block">Sign In</button>
                </form>
                <button type="submit" onClick={() => this.signUpBtnClickHandler()} className=" mx-auto mt-2 btn btn-primary btn-block">Sign Up</button>
            </div>
        )
    }
}

const Login_Data = withRouter(Log_inwithRouter);
export default Login_Data;