import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;