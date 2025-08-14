
import react, { Component } from 'react';
export default class ConditionalIf extends Component {
  x=this.props.status
    render() 
    {
        if(this.x==="Done")
        {
            this.res=<h3>Task is successfully Completed</h3>
        }
        else if(this.x==="Pending")
        {
            this.res=<h3>Task is in Progress</h3>
        }
        return(
            <>
            <div>
                <h3>Conditional renderind using IF Else</h3>
                {this.res}
            </div>
            </>
        )
    }
    }