import React from "react"
import ChildTwo from './ChildTwo'
export default function ChildOne()
{
    return(
        <>
        <h1>ChildOne Component Renders ChildTwo</h1>
        <ChildTwo/>
        </>
    )
}