import '../src/styles/app.scss';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('Open');

  const [todos, setTodos] = useState([
    {
      input: 'Do Something',
      isDone: false,
      id: crypto.randomUUID(),
    },
  ]);

  const isInitial = useRef(true);

  const updateLocalStorage = () => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  };
  useEffect(() => {
    if (localStorage.getItem('todo-list') === null) {
      return;
    }
    const db = JSON.parse(localStorage.getItem('todo-list'));
    setTodos(db);
  }, []);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    updateLocalStorage();
  }, [todos]);

  const tabs = ['All', 'Open', 'Completed'];

  const handleDone = (selectedTodoId) => {
    const changedTodo = {
      ...todos.find((todo) => todo.id === selectedTodoId),
      isDone: true,
    };

    const filteredTodos = todos.filter((todo) => {
      return todo.id !== selectedTodoId;
    });

    setTodos([...filteredTodos, changedTodo]);
  };

  const handleDelete = (selectedTodoId) => {
    let newTodos = todos.filter((todo) => {
      return todo.id !== selectedTodoId;
    });
    setTodos(newTodos);
  };

  const addTask = (task) => {
    let newTodos = [
      ...todos,
      { input: task, isDone: false, id: crypto.randomUUID() },
    ];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Header todos={todos} />
        <Tabs
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
          tabs={tabs}
          todos={todos}
        />
        <TodoList
          todos={todos}
          handleDone={handleDone}
          handleDelete={handleDelete}
          selectedTab={selectedTab}
        />
        <TodoInput addTask={addTask} />
      </div>
    </div>
  );
}

export default App;
