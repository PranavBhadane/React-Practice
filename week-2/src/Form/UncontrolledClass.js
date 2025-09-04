import React, { Component } from "react";

export default class UncountrolledClass extends Component
{
    constructor(prop)
    {
        super(prop)
        this.nameref=React.createRef();
        this.cmref=React.createRef();
        this.updateSubmit=this.updateSubmit.bind(this);
    }

    updateSubmit(event) {
        event.preventDefault();
        alert('Welcome users '+this.nameref.current.value+'From company '+this.cmref.current.value)

    }
    render()
    {
        return(
            <>
                <div style={{textAlign:'center'}}>
                    <form onSubmit={this.updateSubmit}>
                        <h3>Class Uncontroled Component</h3>
                        <input type="text" ref={this.nameref}/><br></br>
                        <input type="text" ref={this.cmref}/><br></br>
                        <input type="submit" value="Submit"/><br></br>
                    </form>
                </div>

            </>
        )
    }
}