
import React, { Component } from 'react';
export default class ConditionalRendering extends Component {

    tech=this.props.technology
    
    render()
    {
        return(
            <>
            <h2>Codtional component rendering using ternary operator</h2>
            <div>
            {
                (this.tech === "React") ?
                <h3>Welcome to React.js Workshop</h3> :
                <h3>Welcome to Angular Workshop</h3>
            }
            </div>
            </>
        )
    }

}