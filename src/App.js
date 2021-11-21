import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';

function App() {



  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);


  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();      // eslint-disable-next-line 
  }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todos => todos.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todos => todos.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  //save Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  };


  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 col-4"></div>
            <div className="col-md-4">
              <div className="container">
                <header className='todo-header'>
                  <h1>ToDo List</h1>
                </header>
                <Form
                  inputText={inputText}
                  todos={todos}
                  setTodos={setTodos}
                  setInputText={setInputText}
                  setStatus={setStatus}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                />
                <TodoList
                  filterTodos={filterTodos}
                  todos={todos}
                  setTodos={setTodos}
                  setEditTodo={setEditTodo}
                />
              </div>

            </div>
            <div className="col-md-4 col-4"></div>
          </div>
        </div>


      </div>
    </div>
  );
}


export default App;
