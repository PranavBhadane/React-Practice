import React from 'react';
export default class MessageComponent extends React.Component 
{

    constructor(props)
    {
        super(props);
        this.state = {
            messege: " Welcome to React.js Workshop"
        }
    }
    render()
    {
        return(
            <>
            <h3> State in class components</h3>
            Message - {this.state.messege}
            </>
        )
    }
}