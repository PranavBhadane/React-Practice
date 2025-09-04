import React, { useRef } from "react";
export default function UncountrolledForm(){
    const namerev=useRef();
    const emailrev=useRef();
    
    function formSubmit()
    {
        alert("name = "+namerev.currnt.value+" Email is = "+emailrev.current.value)
    }

    return(

        <>
            <div style={{textAlign:'left',padding:'3px',marginLeft:'10px'}}>
                <h4>Function component untrolled component for form handling</h4>
                <form onSubmit={formSubmit}>
                    Enter Name : <input type="text" name="name" ref={namerev} required/>
                    Enter Email : <input type="text" name="email" ref={emailrev} required/>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )

}