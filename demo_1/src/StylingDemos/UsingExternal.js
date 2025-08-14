import React from "react";
import './Custom.css'; // Importing the custom CSS file

export default class UsingExternalCss extends React.Component {
    // Define the state object
    state = {
        fullname: "John Doe",
        email: "johndoe@example.com",
        qualificatin: "Bachelor's in Computer Science"
    };

    render() {
        return (
            <>
                <div>
                    <h3>Working with State Management Components</h3>
                    <p>
                        Full Name: {this.state.fullname} <br />
                        Email: {this.state.email} <br />
                        Qualification: {this.state.qualificatin}
                    </p>
                </div>
            </>
        );
    }
}