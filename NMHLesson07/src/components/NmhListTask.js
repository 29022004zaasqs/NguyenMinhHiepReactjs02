import React from 'react';

export default function NmhListTask({ renderNmhListTasks, onNmhEdit, onRemoveTask }) {
    console.log(renderNmhListTasks);

    const nmhHandleEdit = (param) => {
        console.log("Edit:", param);
        onNmhEdit(param);
    };

    const nmhHandleRemove = (taskId) => {
        onRemoveTask(taskId);
    };

    if (!renderNmhListTasks) {
        return <div>No tasks available</div>;
    }

    let nmhElementTask = renderNmhListTasks.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.nmh_taskId}</td>
                <td>{task.nmh_taskName}</td> 
                <td>{task.nmh_level}</td>
                <td>
                    <button className='btn btn-success' onClick={() => nmhHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => nmhHandleRemove(task.nmh_taskId)}>Remove</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Danh sách các nhiệm vụ</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Task Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {nmhElementTask}
                </tbody>
            </table>
        </div>
    );
}
