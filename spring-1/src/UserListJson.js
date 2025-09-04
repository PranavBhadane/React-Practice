import { useEffect, useState } from "react";

function UserListFromJson() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error loading JSON: ", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users from JSON File</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id} - {u.name} {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListFromJson;
