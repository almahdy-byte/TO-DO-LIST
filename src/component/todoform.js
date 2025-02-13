import { useState } from "react";
import React  from "react";
export const Todoform = ({addtodo})=>
    {
        const [value , setValue] = useState("");
        const handelsubmit = (e) =>
            {
                e.preventDefault();
                if(value!=="")
                addtodo(value);
                setValue("")
            }
        return(
            <form onSubmit={handelsubmit} className="todoform">
                <input type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder="WHAT IS TO DO !" value={value} />
                <input className="btn" type="submit" value="submit"/>
            </form>
        )
    }