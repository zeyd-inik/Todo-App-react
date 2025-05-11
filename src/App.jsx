import '../src/styles/app.scss';
import Header from './components/header/Header';
import Tabs from './components/tabs/Tabs';
import TodoList from './components/todoList/TodoList';
import TodoInput from './components/todoInput/TodoInput';

function App() {
  const todos = [
    { input: 'Go to the market', isDone: false },
    { input: 'Go to the hospital', isDone: false },
  ];
  return (
    <>
      <Header todos={todos} />
      <Tabs />
      <TodoList />
      <TodoInput />
    </>
  );
}

export default App;
