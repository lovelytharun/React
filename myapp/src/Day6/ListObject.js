import React from "react";
export default function ListObject()
{
    const college=[{id:246,stuName:"Tharun ",age:18},
    {id:244,stuName:"Surya ",age:19},
    {id:223,stuName:"Siddu ",age:19},]
    const display=college.map((col)=><li key={col.id}>{col.stuName}{col.age}</li>)
    return(
        <div>
        <h1>List of Students</h1>
        {display}
        </div>
    )
}