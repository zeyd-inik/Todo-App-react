import './todoList.scss';
import Card from '../card/Card';
import { useState } from 'react';

function TodoList({ todos, handleDone, handleDelete, selectedTab }) {
  let todolist;
  if (selectedTab == 'All') {
    todolist = todos;
  }
  if (selectedTab == 'Open') {
    todolist = todos.filter((todo) => {
      return todo.isDone == false;
    });
  }
  if (selectedTab == 'Completed') {
    todolist = todos.filter((todo) => {
      return todo.isDone == true;
    });
  }

  return (
    <div className="todoList">
      {todolist.map((i) => {
        return (
          <Card
            key={i.id}
            selectedTodo={i}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
