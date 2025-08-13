import HelloFirst from "./HelloFirst"
import { UsingArrowFunction } from "./UsingArrowF";

export const NestedFunction = () => 
    {
    return (
     <>  <div>
            <HelloFirst />
            <UsingArrowFunction />
        </div>
        <div>
            <ol>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li> 
            </ol>
        </div>
        </> 
    )
}