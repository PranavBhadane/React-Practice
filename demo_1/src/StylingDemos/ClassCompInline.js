import React from "react";

export default class ClassComponentInline extends React.Component {
    styleOne = {
        color: "blue",
        fontSize: "20px",
        textAlign: "center"
    };
    ulStyle = {
        border: "1px solid darkblue",
        width: "50%",
        margin: "0 auto",
        padding: "10px",
        listStyleType: "circle"
    };

    liStyle = {
        color: "white",
        fontSize: "18px"
    };

    render() {
        return (
            <>
                <div style={this.styleOne}>
                    <h1>ClassComponents inline styling</h1>
                </div>
                <ul style={this.ulStyle}>
                    <li style={this.liStyle}>Item 1</li>
                    <li style={this.liStyle}>Item 2</li>
                </ul>
                <h3> State in class components</h3>
            </>
        );
    }
}