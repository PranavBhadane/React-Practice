import React from "react";

export default function ChangeInput() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <span data-testid="change-input-greeting">
        {name === "" ? "Welcome, Anonymous User!" : `Welcome, ${name}`}
      </span>
      <br />
      <label htmlFor="user-name">user-name</label>
      <input
        id="user-name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
