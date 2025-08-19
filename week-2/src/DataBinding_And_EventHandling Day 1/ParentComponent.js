import React from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() 
{
    const msg = "Hii, I am Parent Component and sending data to Child Component";

    return(
        <>
            <div> <ChildComponent message = {msg}/> </div>
        </>
    )
}