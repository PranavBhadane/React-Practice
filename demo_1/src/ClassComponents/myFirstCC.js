import React, { Component } from 'react';

let languages = ['JavaScript', 'Python', 'Java', 'C++'];

export default class MyFirst extends Component
{
    result = "Welcome to Reacht.js Workshop";
    person = {
        name: "Pranav",
        gender:"male",
        degree:"PG-DCA",

    }
    item=languages.map((x,index)=>(<li key={index}>{x}</li>))
    
    render()
    {
        return(
            <>
            <h2>{this.result}</h2>
            <div>
                <p> Name : {this.person.name}</p>
                <p> Gender : {this.person.gender}</p>
                <p> Degree : {this.person.degree}</p>
            </div>
            <h4>List of LAanguage workshop</h4>
            <ol>{this.item}</ol>
            <hr style={{width:"80%", border:"1px solid white", margin:"20px 0" }}/>
            <table border="1" style={{width:"80%", margin:"20px 0"}}>
                <tr>
                    
                    <th>Index</th>
                    <th>Language</th>
                </tr>

                {
                    languages.map((x, index) => (
                        <tr key={index}>
                           <td>{index}</td> 
                            <td>{x}</td>
                            
                        </tr>
                    ))
                }
            </table>
            
        
            </>
        )
    }
}