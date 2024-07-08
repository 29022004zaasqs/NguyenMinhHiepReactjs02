import React, { useState, useEffect } from 'react';
import './App.css';
import NmhStudentList from './components/NmhStudentList';
import NmhStudentForm from './components/NmhStudentForm';

function App() {
 

  const initialStudents = [
    { nmhId: 1, nmhName: "Nguyễn Minh Hiệp", nmhAge: 20, nmhIsActive: true },
    { nmhId: 2, nmhName: "Trần Thị B", nmhAge: 21, nmhIsActive: false },
    { nmhId: 3, nmhName: "Lê Văn C", nmhAge: 22, nmhIsActive: true },
    { nmhId: 4, nmhName: "Phạm Thị D", nmhAge: 23, nmhIsActive: false },
  ];

  const [nmhListTasks] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("NmhTaskData"));
    return savedTasks ;
  });

  const [nmhListStudents, setNmhListStudents] = useState(() => {
    const savedStudents = JSON.parse(localStorage.getItem("NmhStudentData"));
    return savedStudents || initialStudents;
  });


  const [studentToEdit, setStudentToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("NmhTaskData", JSON.stringify(nmhListTasks));
  }, [nmhListTasks]);

  useEffect(() => {
    localStorage.setItem("NmhStudentData", JSON.stringify(nmhListStudents));
  }, [nmhListStudents]);

  const nmhHandleSubmitStudent = (newStudent) => {
    if (studentToEdit) {
      setNmhListStudents(prevStudents =>
        prevStudents.map(student => (student.nmhId === newStudent.nmhId ? newStudent : student))
      );
    } else {
      setNmhListStudents(prevStudents => [
        ...prevStudents,
        { ...newStudent, nmhId: prevStudents.length ? prevStudents[prevStudents.length - 1].nmhId + 1 : 1 }
      ]);
    }
    setStudentToEdit(null);
  };

  const handleEditStudent = (student) => {
    setStudentToEdit(student);
  };

  const handleRemoveStudent = (studentId) => {
    setNmhListStudents(prevStudents =>
      prevStudents.filter(student => student.nmhId !== studentId)
    );
  };

  return (
    <div className="container border">
      <h1>Nguyễn Minh Hiệp K22CNTT</h1>
      <hr />
     
      <div>
        <NmhStudentList students={nmhListStudents} onEdit={handleEditStudent} onDelete={handleRemoveStudent} />
      </div>
      <div>
        <NmhStudentForm onSubmit={nmhHandleSubmitStudent} studentToEdit={studentToEdit} />
      </div>
    </div>
  );
}

export default App;
