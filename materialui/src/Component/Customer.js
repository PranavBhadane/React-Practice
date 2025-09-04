import React,{useState} from 'react'
import Box from '@mui/material/Box'
import { TextField } from '@mui/material'
import Button from '@mui/material'

export default function CustomerComponent()
{
    const [fname,setFname]= useState("");
    const [lname,setLname]= useState("");
    const [comments,setComments]= useState("");
    const [result,setResult]= useState("");
    const getFirstName=(event)=>
    {
        setFname(event.target.value);
    }
    const getComments=(event)=>
    {
        setComments(event.target.value);
    }
    const handleClick=((event)=>
    {
        let s1="Welcome"+ fname+" "+lname
        s1+="We have received your comments as"+comments
        setResult(s1);
        alert("Welcome"+fname+""+lname)
    })
    return(
       <>
       <div>
        <label>FullName</label><br></br><br></br>
        <TextField id="standard-basic" label="FullName" name="firstname"
        variant="standard" onChange={getFirstName}/><br></br><br></br>
        <label>Comments</label><br></br><br></br>
        <TextField id="outlined-multiline-flexible" label="Multiline"
        maxRows={4} onChange={getComments}/><br></br><br></br>
        <button variant="contained" size="large" onClick={handleClick}>Get Details</button><br></br><br></br>
        <h4>{result}</h4>
       </div>

       </>
    )
}
