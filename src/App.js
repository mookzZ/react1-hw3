import React, { useState } from 'react'
import './App.css'

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  return (
      <div className="App">
        <h1>Todo List</h1>
        <div className="task-container">
          <input
              type="text"
              value={newTask}
              onChange={handleChange}
              placeholder="Add new task..."
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
  )
}

export default TodoList
