
import React, { useState } from "react";
import styled from "styled-components";

const subjects = ["Core Java", "MySQL", "SpringBoot", "React.js"];

export default function RegistrationForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        gender: "female",
        email: "",
        phone: "",
        subject: subjects[0],
    });

    const [errors, setErrors] = useState({});
    const [output, setOutput] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const validate = () => {
        const e = {};
        if (!form.firstName.trim()) e.firstName = "First name is required";
        if (!form.lastName.trim()) e.lastName = "Last name is required";
        if (!form.birthday) e.birthday = "Birthday is required";
        if (!form.gender) e.gender = "Select a gender";
        if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
        if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a 10-digit phone";
        return e;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const v = validate();
        setErrors(v);
        if (Object.keys(v).length) return;

        setOutput(
            `Name: ${form.firstName} ${form.lastName} | Birthday: ${form.birthday} | ` +
            `Gender: ${form.gender} | Email: ${form.email} | Phone: ${form.phone} | ` +
            `Subject: ${form.subject}`
        );
    };

    return (
        <Wrapper>
            <div className="card">
                <h2>Registration Form</h2>

                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid">
                        <div className="field">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="First Name"
                            />
                            {errors.firstName && <small className="error">{errors.firstName}</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Last Name"
                            />
                            {errors.lastName && <small className="error">{errors.lastName}</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                id="birthday"
                                name="birthday"
                                type="date"
                                value={form.birthday}
                                onChange={handleChange}
                            />
                            {errors.birthday && <small className="error">{errors.birthday}</small>}
                        </div>

                        <div className="field">
                            <span className="label">Gender</span>
                            <div className="radios">
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={form.gender === "female"}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={form.gender === "male"}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        checked={form.gender === "other"}
                                        onChange={handleChange}
                                    />
                                    Other
                                </label>
                            </div>
                            {errors.gender && <small className="error">{errors.gender}</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                autoComplete="off"
                            />
                            {errors.email && <small className="error">{errors.email}</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="10-digit phone"
                                autoComplete="off"
                            />
                            {errors.phone && <small className="error">{errors.phone}</small>}
                        </div>

                        <div className="field span-2">
                            <label htmlFor="subject">Choose option</label>
                            <select
                                id="subject"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                            >
                                {subjects.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </select>
                        </div>

                        <div className="actions span-2">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>

                {output && (
                    <div className="output">
                        <h4>Form Output</h4>
                        <p>{output}</p>
                    </div>
                )}
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f5f7fb;

  .card {
    width: min(820px, 95vw);
    background: white;
    padding: 28px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,.08);
  }

  h2 { margin: 0 0 18px; }

  form { width: 100%; }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 16px;
  }

  .field { display: flex; flex-direction: column; gap: 6px; }
  .span-2 { grid-column: 1 / -1; }

  label, .label { font-size: 14px; color: #344054ff; }
  input, select {
    padding: 12px 14px;
    border: 1px solid #d0d5dd;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    transition: box-shadow .2s, border-color .2s;
    background: #fff;
  }
  input:focus, select:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 4px rgba(124,58,237,.15);
  }

  .radios { display: flex; gap: 18px; padding: 10px 0 2px; }
  .radios label { display: inline-flex; align-items: center; gap: 8px; }

  .actions { display: flex; justify-content: flex-start; }
  button {
    padding: 12px 18px;
    border: 0;
    border-radius: 10px;
    background: #7c3aed;
    color: white;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(124,58,237,.25);
  }
  button:hover { filter: brightness(1.05); }

  .error { color: #c62828; font-size: 12px; }

  .output { margin-top: 18px; padding: 12px; background: #f0fdf4; border-radius: 8px; }
  .output h4 { margin: 0 0 6px; color: #166534; }
`;
