import { useState } from "react";
import React  from "react";
export const Todoformedit = ({editTask , todo})=>
    {
        const [value , setValue] = useState("");
        const handelsubmit = (e) =>
            {
                e.preventDefault();
                if(value)
                {
                editTask(value , todo.id);
                }
            }
        return(
            <form onSubmit={handelsubmit} className="todoform">
                <input type="text" onChange={(e)=>{setValue(e.target.value)}} placeholder={todo.name} value={value} />
                <input className="btn" type="submit" value="up-date"/>
            </form>
        )
    }