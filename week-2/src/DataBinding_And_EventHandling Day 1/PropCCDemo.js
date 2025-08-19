import React from "react";

export default class PropsDemoComponent extends React.Component 
{
    techno=""
    module=""

    constructor(props) {
        super(props);
        this.techno = props.techno;
        this.module = props.module;
    }

    render()
    {
        return(
            <>
                <div><h3>You chouse</h3>
                <h4>technology - {this.techno}</h4>
                <h4>module - {this.module}</h4>
                </div>
            </>
        )
    }

}