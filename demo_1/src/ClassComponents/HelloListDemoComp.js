
import React, {Component} from "react"

export default class HellowLostDemoComp extends Component 
    {
        listofLanguages = this.props.languages 
        itemlist=this.listofLanguages.map((x)=>(<li key={x.id}> {x.name}</li>))

        render()
        {
            return(
                <>
                <div>
                    <h3>
                        List of Languages
                    </h3>
                    <ol>{this.itemlist}</ol>
                </div>
                </>
            )
        }
        
    }
