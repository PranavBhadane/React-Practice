import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email Id required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SignupFormComponent = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div style={{ textAlign: "left", padding: "3px", marginLeft: "10px" }}>
      <h4>Form Handling using Formik Library</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <br />
        <br />
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <br />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <br />
        <br />
        <button type="submit" style={{ marginLeft: "50px" }}>
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default SignupFormComponent;
