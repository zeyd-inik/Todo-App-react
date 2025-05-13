import '../src/styles/app.scss';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { input: 'Go to the market', isDone: true, id: crypto.randomUUID() },
    { input: 'Go to the hospital', isDone: false, id: crypto.randomUUID() },
    { input: 'Do homework', isDone: false, id: crypto.randomUUID() },
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  const tabs = ['All', 'Open', 'Completed'];

  const handleDone = (selectedTodoId) => {
    /*  const changedTodoIndex = todos.findIndex((todo) => {
      return todo.id === selectedTodoId;
    }); */

    const changedTodo = {
      ...todos.find((todo) => todo.id === selectedTodoId),
      isDone: true,
    };

    const filteredTodos = todos.filter((todo) => {
      return todo.id !== selectedTodoId;
    });

    setTodos([...filteredTodos, changedTodo]);
  };

  const handleDelete = (id) => {};

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
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
