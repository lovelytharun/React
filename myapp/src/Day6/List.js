export default function List() {
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani,index)=> <li key={index}> {index}{ani}</li>)
    return (
        <div style={{background:"yellow"}}>
            <ul type="none">
            {result}
            </ul>
        </div>
    )
}
