import React from "react";
import Todo from "../Todo/Todo";
import './TodoList.css'

const TodoList = ({ todos, setTodos, filterTodos, setEditTodo }) => {
    return (
        <div className='todolist-div'>
            <ul className='todo-list'>
                {filterTodos.map((todo, index) => (
                    <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} text={todo.text} setEditTodo={setEditTodo} index={index}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList