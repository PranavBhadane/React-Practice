import React, { Component } from "react";

export default class StudentControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qualification: "", result: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let s = "Your name is : " + this.state.name + "\nQualification : " + this.state.qualification;
 
    this.setState({
      result: "Name - " + this.state.name + " | Qualification - " + this.state.qualification,
    });
    
  };

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleQualification = (e) => {
    this.setState({ qualification: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              type="text"
              id="txtname"
              name="custname"
              placeholder="Full Name"
              autoComplete="off"
              onChange={this.handleChangeName}
              className="form-control"
            />

            <input
              type="text"
              id="txtqual"
              name="qual"
              placeholder="Qualification"
              autoComplete="off"
              onChange={this.handleQualification}
              className="form-control"
            />
            <button type="submit">Submit</button>
          </fieldset>
        </form>

        <p>{this.state.result && <b>{this.state.result}</b>}</p>
      </>
    );
  }
}
