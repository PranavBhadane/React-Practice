import React from "react";

export const FcInlineStyleComponent = () =>
{
    const inlineStyle = {
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
        color: "darkblue",
        fontSize: "20px"
    }

    const ulStyle = {
        border: "1px solid darkblue",
        width: "50%",
        margin: "0 auto",
        padding: "10px",
        listStyleType: "circle"
    }

    const liStyle = {
       
        
        color: "white",
        fontSize: "18px"
    }

    return (
        <div>
            <div style={inlineStyle}>
                <h2>Inline Styling Example</h2>
                <p>This is an example of inline styling in React.</p>
            </div>
            <ul style={ulStyle}>
                <li style={liStyle}>Item 1</li>
                <li style={liStyle}>Item 2</li>
            </ul>
        </div>
    )
}