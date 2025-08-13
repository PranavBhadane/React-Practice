import React from "react";

export default class StateDemoFirstCC extends React.Component 
{
    constructor (props)
    {
        super(props);
        this.state={
            fullname: "John Doe",
            email:"bhadane.pranav11@gmail.com",
            qualificatin:"PG Dac"
        }

    }
       render()
       {
        return(
            <>
            <div>
                <h3>Working with state management components</h3>
                <p>
                    Full Name: {this.state.fullname} <br />
                    Email: {this.state.email} <br />
                    Qualification: {this.state.qualificatin}
                </p>
            </div>
            </>
        )
       }
    
}