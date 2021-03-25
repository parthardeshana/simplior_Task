import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { withRouter } from "react-router";

class NavbarwithRouter extends Component {
    logOut = () => {
        firebase.auth().signOut().then(() => {
            console.log("log off");
            this.props.history.push("/");
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        // console.log("in firstname", this.props.user);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h4><span style={{ color: "#4288E4" }}>P</span>ROJECT </h4>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                        <FontAwesomeIcon style={{ color: "#4288E4", fontSize: "20px" }} icon={faSearch} />
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                        <FontAwesomeIcon style={{ color: "#4288E4", fontSize: "20px" }} icon={faCommentDots} />
                                    </a>
                                </li>
                                <li className="nav-item mt-2">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                        <FontAwesomeIcon style={{ color: "#4288E4", fontSize: "20px" }} icon={faBell} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                        <button style={{ backgroundColor: "#EDF0F7", color: "black", border: "none", fontSize: "14px" }} className="btn btn-secondary">Hi, <span>userName</span> </button>
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">
                                        <button onClick={() => this.logOut()} style={{ backgroundColor: "#EDF0F7", color: "black", border: "none", fontSize: "14px" }} className="btn btn-warning">
                                            log out</button>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

let Navbar = withRouter(NavbarwithRouter);
export default Navbar;