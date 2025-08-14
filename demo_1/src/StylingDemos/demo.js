import React from "react";
import mystyles from './demo.module.css'; // Importing CSS Module

export default class DemoCSSModule extends React.Component 
{str="It is component specific styling";
    render()
    {
        return(
            <>
            <div className={mystyles.fordiv}>
                <h2>Demo CSS Module</h2>
                <p className={mystyles.forpara}>{this.str}</p>
            </div>
            </>
            
        )
    }

}