import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayOption, setDisplayOption] = useState('status');
  const [sortedOption, setSortedOption] = useState('priority');

  // Load state from local storage on initial render
  useEffect(() => {
    const savedDisplayOption = localStorage.getItem('displayOption');
    const savedSortedOption = localStorage.getItem('sortedOption');
    if (savedDisplayOption) {
      setDisplayOption(savedDisplayOption);
    }
    if (savedSortedOption) {
      setSortedOption(savedSortedOption);
    }
  }, []);

  // Update state and save to local storage when display or sort options change
  useEffect(() => {
    localStorage.setItem('displayOption', displayOption);
  }, [displayOption]);

  useEffect(() => {
    localStorage.setItem('sortedOption', sortedOption);
  }, [sortedOption]);

  useEffect(() => {
    // Fetch tasks and users from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://apimocha.com/quicksell/data');
        const data = await response.json();
        setTasks(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="select-container">
        <label htmlFor="displayOption">Display by:</label>
        <select
          id="displayOption"
          value={displayOption}
          onChange={(e) => setDisplayOption(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
        <label htmlFor="sortedOption">Sort by:</label>
        <select
          id="sortedOption"
          value={sortedOption}
          onChange={(e) => setSortedOption(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
      <KanbanBoard
        tasks={tasks}
        users={users}
        displayOption={displayOption}
        sortedOption={sortedOption}
      />
    </div>
  );
}

export default App;
