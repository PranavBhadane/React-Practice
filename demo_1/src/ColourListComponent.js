


export const ColourListComponent=() =>
{
    const colourArr = ["Red", "Green", "Blue", "Yellow", "Pink"];
    const colourArrList = colourArr.map(c=>(<li key={c}>{c}</li>));

    return (
        <>
        <fieldset>
            <legend>Colour List</legend>
            <ul>
                {colourArrList}
            </ul>
        </fieldset>
        </>
    )
}