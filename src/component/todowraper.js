import React from "react";
import { Todoform } from "./todoform";
import { useState , useEffect} from "react";
import { Todosections } from "./todosections";
import { Todoformedit } from "./todoeditform";

export const Todowrapper = ()=>
    {
        const [todos , setTodo] = useState([]);
        useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('savedTodos')) || [];
        setTodo(savedTodos);
    }, []);
const addtodo = (todo) => {
    const newTodos = [{ id: Date.now(), name: todo, completed: false, isEditing: false }, ...todos];
    setTodo(newTodos);
    window.localStorage.setItem('savedTodos', JSON.stringify(newTodos));
};
        const delettodo = id =>
            {
                const newtodo = todos.filter((todo)=> todo.id !== id);
                setTodo(newtodo)
            }
        const edittodo = id =>
            {
                setTodo(  todos.map((todo) =>todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo))
            }
        const editTask=(task , id)=>
            {
                const newtodo = todos.map((todo) =>todo.id === id ? {...todo, name:task , isEditing: !todo.isEditing } : todo)
                setTodo(newtodo);
                window.localStorage.setItem("savedTodos",JSON.stringify(newtodo)); 
            }
        return(
        <div className="todowrapper">
            <h1>GET THINGS DONE!</h1>
            <Todoform addtodo={addtodo} />
            
            {
                
                todos.map((todo) => todo.isEditing ? 
                (<Todoformedit editTask={editTask}  todo={todo}/>)
                :
                (<Todosections 
                key = {todo.id}
                name={todo.name}
                id={todo.id} 
                delettodo={delettodo}
                edittodo = {edittodo} />)
            )}
        </div>
        )
    }