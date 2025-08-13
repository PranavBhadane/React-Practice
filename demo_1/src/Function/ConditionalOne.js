export const CondtionalOne = (props) =>
{
    const ans= props.favlang;
    let x=props.num
    return(
        <>
        <div>
            {
                (ans=="Python")? (<h2>Favourite Language -{ans}</h2>) : (<h2>Favourite Language-{ans}</h2>)
            }
        </div>
        <div>
            <h3>Using Logical Operators &&</h3>
            <div>
                {(x%2==0) && <h3>{x} is even</h3>}
                {(x%2!==0) && <h3>{x} is odd</h3>}
            </div>
        </div>
        </>
    )
}