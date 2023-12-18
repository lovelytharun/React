function Demo()
{
    react(
        <div>
        <h1>Hi India</h1>
        </div>
    )
}
function OneExport()
{
    return(
        <div>
        <Demo/>
        <h1>i will export only one components</h1>
        </div>
    )
}

export default OneExport;