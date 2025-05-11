import '../src/styles/app.scss';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { input: 'Go to the market', isDone: true },
    { input: 'Go to the hospital', isDone: false },
    { input: 'Do homework', isDone: false },
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');
  const tabs = ['All', 'Open', 'Completed'];

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
        <TodoList />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
