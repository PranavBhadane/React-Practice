

export const DemoComponent = (props) => {

    let depinfo=props.depinfo;
    return (
        <>
        <div>
            <p>Dept code : {depinfo.deptCode}</p>
            <p>Dept Name : {depinfo.deptName}</p>
            <p>Dept Location : {depinfo.deptLocation}</p>
            <p>Dept Head : {depinfo.deptHead}</p>
        </div>
        </>
    )

}