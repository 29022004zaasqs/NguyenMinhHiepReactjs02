import React, { useState, useEffect } from 'react';

export default function NmhTaskAddOrEdit(props) {
    // Task object
    const nmhTaskObj = { 
        nmh_taskId: 0, 
        nmh_taskName: "",
        nmh_level: "" 
    };

    const [nmhTask, setNmhTask] = useState(nmhTaskObj);

    // Handle change function
    const nmhHandleChange = (nmhEvent) => {
        const name = nmhEvent.target.name;
        const value = nmhEvent.target.value;

        setNmhTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const nmhHandleSubmit = (nmhEvent) => {
        // Perform actions such as submitting form data
        nmhEvent.preventDefault();
        props.nmhOnSubmit(nmhTask);
    };

    useEffect(() => {
        console.log(nmhTask);
    }, [nmhTask]);

    return (
        <div>
            <h2>Thêm mới task</h2>
            
            <form>
                <div>
                    <label>Task ID</label>
                    <input 
                        name='nmh_taskId' 
                        value={nmhTask.nmh_taskId} 
                        onChange={nmhHandleChange} 
                    />
                </div>
                <div>
                    <label>Task Name</label>
                    <input 
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
                <button onClick={nmhHandleSubmit}>Ghi lại</button>
            </form>
        </div>
    );
}
