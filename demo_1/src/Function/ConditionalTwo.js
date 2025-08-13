
export const ConditionalStatement =()=>
{
    let x=20;
    let res=""
    if(x>10)
    {
        res="hello"
    }
    else
    {
        res="bye"
    }

    return(
        <div>
            <h2>Conditional Statement</h2>
            <p>{res}</p>
        </div>
    )
}