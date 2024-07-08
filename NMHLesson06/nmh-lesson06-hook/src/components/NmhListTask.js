import React from 'react';

export default function NmhListTask({ renderNmhListTasks }) {
    console.log(renderNmhListTasks);

    if (!renderNmhListTasks) {
        return <div>No tasks available</div>;
    }

    // Render data
    let nmhElementTask = renderNmhListTasks.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.nmh_taskId}</td>
                <td>{task.nmh_taskName}</td> 
                <td>{task.nmh_level}</td>
                <td>
                    <button className='btn btn-success'>Edit</button>
                    <button className='btn btn-danger'>Remove</button>
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
