import { useState } from 'react';
import './todoInput.scss';

import { TiPlusOutline } from 'react-icons/ti';

function TodoInput({ addTask }) {
  const [input, setInput] = useState('');
  return (
    <div className="todoInput">
      <input
        type="text"
        placeholder="Add task"
        className="text-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <TiPlusOutline
        size={40}
        className="btn"
        onClick={() => {
          if (input == '') {
            return;
          }
          addTask(input);
          setInput('');
        }}
      />
    </div>
  );
}

export default TodoInput;
