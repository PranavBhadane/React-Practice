import React from "react";
export default function Message()
{
    const[message,setMessage]=React.useState("HI There");
    const handleClick=()=>
    {
        setMessage("Hellos");
    }
    return (
        <div>
            <h2>With events and state</h2>
            <p>{message}</p>
            <button onClick={handleClick}>Hit it</button>
        </div>
    );
}