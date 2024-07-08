import React, { useState, useEffect } from 'react';

export default function NmhTaskAddOrEdit({ nmhOnSubmit, taskToEdit }) {
  const initialTask = { 
      nmh_taskId: 0, 
      nmh_taskName: "",
      nmh_level: "" 
  };

  const [nmhTask, setNmhTask] = useState(initialTask);

  useEffect(() => {
    if (taskToEdit) {
      setNmhTask(taskToEdit);
    } else {
      setNmhTask(initialTask);
    }
  }, [taskToEdit]);

  const nmhHandleChange = (nmhEvent) => {
    const { name, value } = nmhEvent.target;
    setNmhTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const nmhHandleSubmit = (nmhEvent) => {
    nmhEvent.preventDefault();
    nmhOnSubmit(nmhTask);
  };

  return (
    <div>
      <h2>{taskToEdit ? 'Edit Task' : 'Thêm mới task'}</h2>
      <form onSubmit={nmhHandleSubmit}>
        <div>
          <label>Task ID</label>
          <input 
            type='number'
            name='nmh_taskId' 
            value={nmhTask.nmh_taskId} 
            onChange={nmhHandleChange} 
            disabled={taskToEdit !== null}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input 
            type='text'
            name='nmh_taskName' 
            value={nmhTask.nmh_taskName} 
            onChange={nmhHandleChange} 
          />
        </div>
        <div>
          <label>Task Level</label>
          <select 
            name='nmh_level' 
            value={nmhTask.nmh_level} 
            onChange={nmhHandleChange}
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
        </div>
        <button type='submit'>Ghi lại</button>
      </form>
    </div>
  );
}
