import React from 'react';
import './Card.css';

function Card({ task }) {
  const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
  const priorityColors = ['gray', 'green', 'blue', 'orange', 'red'];

  return (
    <li className="card">
      <div className="card-header">
        <div className="priority" style={{ backgroundColor: priorityColors[task.priority] }}>
          {priorityLabels[task.priority]}
        </div>
        <div className="user">{task.userId}</div>
      </div>
      <h3 className="card-title">{task.title}</h3>
      <p className="card-description">{task.tag.join(', ')}</p>
    </li>
  );
}

export default Card;
