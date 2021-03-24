import React, { Component } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// We are not using this file 
//ignore this file 

export class Input_form extends Component {
    render() {
        return (
            <form action="#">
                <div className="mb-2 inputField w-50 mx-auto">
                    <label style={{ height: "30px", fontSize: "14px" }} for="exampleInputEmail1" className="form-label mb-0">{this.props.name}</label>
                    <input className="form-control" type="text" placeholder={this.props.placeholder} />
                </div>
            </form>
        )
    }
}

export default Input_form
