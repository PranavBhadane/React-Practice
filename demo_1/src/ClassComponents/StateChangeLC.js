import react, { Component } from 'react';

export default class StateChangeLC extends Component 
{   
    constructor (props){
        super(props);
        this.state = {favoriteColour: "red"};
    }

    componentDidMount()
    {
        setTimeout(() => {
            this.setState({favoriteColour: "blue"});
        }, 2000);
    }

    render()
    {
        return(
            <>
            <div>
                <h3>Changing component State Value</h3>
                <h3> We have noter ur fav colour is<h1>{this.state.favoriteColour}</h1></h3>
                <h3>We will soon send u a list od desired apparels in ur favorite</h3>
            </div>
            </>
        )
    }


}