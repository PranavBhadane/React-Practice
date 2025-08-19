import React from "react"
import ChildThree from "./ChildThree";

export default function ChildTwo()
{
    return(
        <div style={{borderColor:'red',borderCollapse:'collapse'}}>
            <h3>Child Two Component</h3>
            <ChildThree/>
        </div>
    )
}