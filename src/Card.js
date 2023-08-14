import React from 'react';
import './Card.css';
import alertLogo from './alert-logo.png'; // Replace with the actual path to your alert logo image

function Card({ task }) {
  const priorityLabels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
  const priorityColors = ['gray', 'green', 'blue', 'orange', 'red'];

  return (
    <li className="card">
      <div className="card-header">
        <div className={`priority ${priorityColors[task.priority]}`}>
          {priorityLabels[task.priority]}
        </div>
        <div className="user">{task.userId}</div>
        {task.isAlert && (
          <div className="alert-icon">
            <img src={alertLogo} alt="Alert" className="alert-logo" />
            <span className="alert-text">Feature Request</span>
          </div>
        )}
      </div>
      <h3 className="card-title">{task.title}</h3>
      <p className="card-description">{task.tag.join(', ')}</p>
    </li>
  );
}

export default Card;
