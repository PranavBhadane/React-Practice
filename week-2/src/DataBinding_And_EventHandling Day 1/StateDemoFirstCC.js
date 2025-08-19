import React from "react";

export default class StateDemoFirstCC extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            ISBN: "978-3-16-148410-0" ,
            Title: "Learning React" ,
            Price: "$29.99"
        };
    }

    render()
    {
        return(
            <>
                <div> <h1>Book Details</h1>
                <h4>Book ISBN = {this.state.ISBN}</h4>
                <h4>Book Title = {this.state.Title}</h4>
                <h4>Book Price = {this.state.Price}</h4>

                </div>
            </>
        )
    }
}