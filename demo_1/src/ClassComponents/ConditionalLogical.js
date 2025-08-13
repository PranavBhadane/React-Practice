import React, { Component } from 'react';

export default class ConditionalLogical extends React.Component {

    ans=this.props.favlang

    render()
    {
        return(
            <>
            <h3>Using logical operator</h3>
            <div>
                {(this.ans==="python") && <h3>Your fav lang is Python</h3>}
                {(this.ans==="JavaScript") && <h3>Your fav lang is JavaScript</h3>}
            </div>
            </>

        )
    }
}