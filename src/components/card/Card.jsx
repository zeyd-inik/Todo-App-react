import './card.scss';

function Card({ selectedTodo, handleDone, handleDelete }) {
  return (
    <div className="card">
      <span>{selectedTodo.input}</span>

      <button
        className="btn-done"
        onClick={() => {
          handleDone(selectedTodo.id);
        }}
        disabled={selectedTodo.isDone}
      >
        Done
      </button>
      <button
        className="btn-delete"
        onClick={() => {
          handleDelete(selectedTodo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
