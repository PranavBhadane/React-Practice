import React, { useState } from "react";
import styled from "styled-components";

const CustomerForm = () => {
    
  const [formData, setFormData] = useState({
    fullName: "",
    custEmail: "",
    degree: "",
  });


  const [result, setResult] = useState("");


  const handleInput = (e) => {

    const { name, value } = e.target;
    
    setFormData((perv)=>({...perv,[name]:value}))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = `Name - ${formData.fullName} | Email - ${formData.custEmail} | Degree - ${formData.degree}`;
    
    setResult(res);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="card">
          <h2 className="card-title text-center">Customer Form</h2>
          <div className="card-body py-md-4">


            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  autoComplete="off"
                  value={formData.fullName}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="custEmail"
                  placeholder="Email"
                  autoComplete="off"
                  value={formData.custEmail}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="degree"
                  placeholder="Qualification / Degree"
                  autoComplete="off"
                  value={formData.degree}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>

              <div className="d-flex flex-row align-items-center justify-content-between">
                <button type="submit" className="btn btn-primary">
                  Submit Form
                </button>
              </div>
            </form>

                {/* Show Output */}
                {result && (
                <div className="output">
                    <h4>Form Output:</h4>
                    <p>{result}</p>
                </div>
                )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    border: 0.1rem solid #f8f9fa;
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  input {
    width: 25rem;
    padding: 1rem 1.5rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    outline: none;
  }
  input:focus {
    border: 1px solid #da5767;
    box-shadow: 0 0 5px rgba(218, 87, 103, 0.5);
  }
  .btn {
    padding: 0.8rem 1.5rem;
    background-color: #df8c96;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }
  .btn:hover {
    background-color: #da5767;
  }
  .output {
    margin-top: 2rem;
    color: green;
  }
`;

export default CustomerForm;
