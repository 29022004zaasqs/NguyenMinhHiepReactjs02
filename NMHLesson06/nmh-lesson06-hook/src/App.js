import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NmhListTask from './components/NmhListTask';
import NmhTaskAddOrEdit from './components/NmhTaskAddOrEdit';

function App() {
  const nmh_listTasks = [
    { nmh_taskId: 22101234, nmh_taskName: "Nguyễn Minh Hiệp", nmh_level: "Small" },
    { nmh_taskId: 1, nmh_taskName: "Học lập trình frontend", nmh_level: "Small" },
    { nmh_taskId: 2, nmh_taskName: "Học lập trình reactjs", nmh_level: "Medium" },
    { nmh_taskId: 3, nmh_taskName: "Lập trình với Frontend - Reactjs", nmh_level: "High" },
    { nmh_taskId: 4, nmh_taskName: "Lập trình Fullstack (PHP, Java, NetCore)", nmh_level: "Small" },
  ];

  const [nmhListTasks, setNmhListTasks] = useState(nmh_listTasks);

  const nmhHandleSubmit = (nmhParam)=>{
    console.log("App",nmhParam);
    setNmhListTasks(prev => {
      return[
        ...prev,
        nmhParam
      ]
    })
  }
  return (
    <div className="container border">
      <h1>Nguyễn Minh Hiệp K22CNTT</h1>
      <hr />
      <div>
        {/* Danh sách List task */}
        <NmhListTask renderNmhListTasks={nmhListTasks} />
      </div>
      <div>
        <NmhTaskAddOrEdit nmhOnSubmit={nmhHandleSubmit} />
      </div>
    </div>
  );
}

export default App;
