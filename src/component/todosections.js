import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todosections = ({name , id ,delettodo , edittodo})=>
    {
        return(
            <div className="todo">
                <p  key={id} >{name}</p>
                <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenSquare} onClick = {()=>edittodo(id)} />
        <FontAwesomeIcon className="delete-icon" onClick={()=>delettodo(id)} icon={faTrash} />
        </div>
            </div>
        )
    }