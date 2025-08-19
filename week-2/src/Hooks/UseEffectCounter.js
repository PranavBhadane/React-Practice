
import { useEffect, useState } from "react";

export function CounterEffectDemo() 
{
   
    const[count,setCount]= useState(0);
    const[calculation, SetCalculation]=useState(0);

    useEffect(()=>{SetCalculation(()=>count*2)},[count])

    

    return(
        <>
            <div>
                <h1>useEffect Component</h1>
                <h2> default value - {count}</h2>
                <button onClick={()=>setCount((c)=>c+1)}>Click</button>
                <p>calculation: {calculation}</p>
             
            </div>
        </>
    )
}