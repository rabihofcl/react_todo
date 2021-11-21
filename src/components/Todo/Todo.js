import React from 'react'
import './Todo.css'

function Todo({ text, todo, todos, setTodos, setEditTodo, index }) {

    const date = new Date()

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }


    return (
        <div className={`row todo-div ${todo.completed ? "completed" : ""}`}>
            <div className="col-md-12 ">
                <div className='row list-banner'>
                    <div className='col-md-2 col-2'>
                        <p className='index-no'>{index+1}</p>
                    </div>
                    <div className='col-md-6 col-6'>
                        <p className='date'><small>{date.toDateString()}</small></p>
                    </div>
                    <div className='col-md-4 col-4 btns'>
                        <div className="col-md-3 col-4">
                            <button onClick={completeHandler} className="complete-btn btn-cls"><i className="fas fa-check"></i></button>
                        </div>
                        <div className="col-md-3 col-4">
                            <button onClick={() => handleEdit(todo)} className="edit-btn btn-cls"><i className="fas fa-pen"></i></button>
                        </div>
                        <div className="col-md-3 col-4">
                            <button onClick={deleteHandler} className="trash-btn btn-cls"><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={`col-md-12 col-12 ${todo.completed ? "completed" : ""}`} >
                        <label className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Todo
