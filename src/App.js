import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-purple-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-green-400">Lista de tareas</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow p-2 border rounded-l text-purple-900"
          placeholder="Nueva tarea"
        />
        <button
          onClick={addTask}
          className="bg-green-400 text-purple-900 p-2 rounded-r hover:bg-green-500"
        >
          <PlusCircle size={24} />
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex items-center mb-2 bg-purple-800 p-2 rounded">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-green-400'}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;