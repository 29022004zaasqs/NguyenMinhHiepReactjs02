import React, { useState } from 'react';
import './App.css';
import NmhListTask from './components/NmhListTask';
import NmhTaskAddOrEdit from './components/NmhTaskAddOrEdit';

function App() {
  const initialTasks = [
    { nmh_taskId: 22101234, nmh_taskName: "Nguyễn Minh Hiệp", nmh_level: "Small" },
    { nmh_taskId: 1, nmh_taskName: "Học lập trình frontend", nmh_level: "Small" },
    { nmh_taskId: 2, nmh_taskName: "Học lập trình reactjs", nmh_level: "Medium" },
    { nmh_taskId: 3, nmh_taskName: "Lập trình với Frontend - Reactjs", nmh_level: "High" },
    { nmh_taskId: 4, nmh_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", nmh_level: "Small" },
  ];

  const [nmhListTasks, setNmhListTasks] = useState(initialTasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const nmhHandleSubmit = (newTask) => {
    if (taskToEdit) {
      
      setNmhListTasks(prevTasks =>
        prevTasks.map(task => (task.nmh_taskId === newTask.nmh_taskId ? newTask : task))
      );
    } else {
      
      setNmhListTasks(prevTasks => [
        ...prevTasks,
        newTask
      ]);
    }
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleRemoveTask = (taskId) => {
    setNmhListTasks(prevTasks =>
      prevTasks.filter(task => task.nmh_taskId !== taskId)
    );
  };

  return (
    <div className="container border">
      <h1>Nguyễn Minh Hiệp K22CNTT</h1>
      <hr />
      <div>
        {/* Danh sách List task */}
        <NmhListTask renderNmhListTasks={nmhListTasks} onNmhEdit={handleEditTask} />
      </div>
      <div>
        <NmhTaskAddOrEdit nmhOnSubmit={nmhHandleSubmit} taskToEdit={taskToEdit} />
      </div>
    </div>
  );
}

export default App;
