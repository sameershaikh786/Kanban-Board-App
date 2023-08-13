import React from 'react';
import Card from './Card';
import './KanbanBoard.css';

function KanbanBoard({ tasks, users, displayOption, sortedOption }) {
  const groupedTasks = {};

  // Grouping logic based on the selected display option
  tasks.forEach((task) => {
    const groupKey =
      displayOption === 'priority'
        ? task.priority
        : displayOption === 'user'
        ? task.userId
        : task.status;
    if (!groupedTasks[groupKey]) {
      groupedTasks[groupKey] = [];
    }
    groupedTasks[groupKey].push(task);
  });

  // Sorting logic based on the selected sorting option
  Object.keys(groupedTasks).forEach((groupKey) => {
    groupedTasks[groupKey].sort((a, b) =>
      sortedOption === 'priority'
        ? b.priority - a.priority
        : a.title.localeCompare(b.title)
    );
  });

  return (
    <div className="kanban-board">
      {Object.keys(groupedTasks).map((column) => (
        <div key={column} className="board-column">
          <h2 className="column-header">
            {displayOption === 'user' ? users.find((user) => user.id === column)?.name : column}
          </h2>
          <ul className="card-list">
            {groupedTasks[column].map((task) => (
              <Card key={task.id} task={task} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
