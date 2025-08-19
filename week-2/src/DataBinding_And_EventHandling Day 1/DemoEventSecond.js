import React from 'react';

export default class DemoEventSecond extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            subject:""
        }
    }
    handleChange = (event) => 
    {
         this.setState({ subject: event.target.value})
    }

    render()
    {
        return(    
               <div>
                    <h4 style={{colour : "#68cf48"}}>State Handling</h4>
                    <label>Enter your Favoraite Programming Language</label>
                    <input placeholder="Enter here" onChange={this.handleChange} />
                    <p><b>{this.state.subject}</b> is your Favorite program</p>
                </div>
            
        )
    }
}