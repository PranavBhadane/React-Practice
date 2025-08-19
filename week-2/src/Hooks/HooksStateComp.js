
import { useState } from "react";

export function HooksStateComp() 
{
    const[message, setMessage] = useState("Hello")
    const[count,setCount]= useState(0);

    const handleMessageChange = ()=>
    {
        setMessage(message === 'Hello' ? 'Goodbye' : 'Hello')
    }

    const handleCount = () =>
    {
        setCount((c)=> c+1);
    }

    const handleDecrement=()=>
    {
        setCount((c)=>c-1)
    }

    const handleCounttoZero=()=>

        {
            setCount((c)=>0)
        }


    return(
        <>
            <div>
                <h1>Hooks State Component</h1>
                <h2> default value - {message}</h2>
                <button onClick={handleMessageChange}>Click</button>
                <h2>the count is {count} </h2>
                <p>Use bellow buttons to in crement / decrement the count</p>
                <button onClick = {handleCount}>Increment</button>
                <button onClick = {handleDecrement}>Decrement</button>
                <button onClick={handleCounttoZero}>Reset</button>
                
            </div>
        </>
    )
}