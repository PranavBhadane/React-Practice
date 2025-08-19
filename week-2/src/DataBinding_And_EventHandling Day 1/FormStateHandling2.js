import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Message: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target; 
    this.setState({ [name]: value }); 
  };

  render() 
  {
    return (
      <div>
        <h4 style={{ color: "#68cf48" }}>State Handling 2</h4>

        <label>Enter your Name: </label>
        <input
          name="Name"
          placeholder="Enter Name"
          onChange={this.handleChange}
        />

        <label> Enter your Email: </label>
        <input
          name="Email"
          placeholder="Enter Email"
          onChange={this.handleChange}
        />

        <label> Enter your Message: </label>
        <input
          name="Message"
          placeholder="Enter Message"
          onChange={this.handleChange}
        />

        <p><b>{this.state.Name}</b> is your Name</p>
        <p><b>{this.state.Email}</b> is your Email</p>
        <p><b>{this.state.Message}</b> is your Message</p>
      </div>
    );
  }
}
