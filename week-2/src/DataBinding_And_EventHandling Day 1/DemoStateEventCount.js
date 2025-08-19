import React from "react";

export default class CountDemo extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            count: 0
        };
       
    }
        handleClick = () => {
            this.setState({ count: this.state.count + 1 });
        }

        handleReset = () => {
            this.setState({ count: 0 });
        }

        handleDecrement = () => {
            this.setState({count: this.state.count - 1});
        }


     render()
        {
            return(
                <>
                     <div>
                        
                    <h1>Count: {this.state.count}  Click to increase the count</h1>
                    <button onClick={this.handleClick}>Increment</button>
                    <button onClick={this.handleDecrement}>Decrement</button>
                    <button onClick={this.handleReset}>Reset</button>
                    
                </div>
                </>
            )
        }
}