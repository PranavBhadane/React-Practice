import { useState } from "react";

const { useEffect } = require("react");

function UserList()
{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .then(err => console.log(err));
    },[]);
    return(
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;
