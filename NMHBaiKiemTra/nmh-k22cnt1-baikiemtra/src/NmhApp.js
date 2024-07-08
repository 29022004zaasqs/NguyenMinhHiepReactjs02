import { useState, useEffect } from 'react';
import React from 'react';
import axios from './api/nmhApi'; // Updated import to NmhApi
import NmhListStudent from './components/NmhListStudent'; // Updated import to NmhListStudent
import NmhAddOrEdit from './components/NmhAddOrEdit'; // Updated import to NmhAddOrEdit

const NmhApp = () => {
  const [nmhListStudent, setNmhListStudent] = useState([]);
  const [nmhAddOrEdit, setNmhAddOrEdit] = useState(false);
  const [nmhStudent, setNmhStudent] = useState(null); // Start with null to differentiate between add and edit

  // Fetch data from API
  const nmhGetAllStudent = async () => {
    try {
      const nmhResponse = await axios.get("NmhSinhVien");
      console.log("Api Data:", nmhResponse.data);
      setNmhListStudent(nmhResponse.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    nmhGetAllStudent();
  }, []); // Empty dependency array to run the effect only once

  // Handle adding new student
  const nmhHandleAddNew = () => {
    // Reset to initial state for adding new student
    setNmhStudent({
      NmhHoSV: "Nguyễn",
      NmhTenSV: "Minh Hiệp",
      NmhPhai: true,
      NmhNgaySinh: "29/02/2004",
      NmhNoiSinh: "Hà Nội",
      NmhMaKH: "226513",
      NmhHocBong: "6320303",
      NmhDiemTrungBinh: "626260",
      NmhMaSV: "31651165156" // Ensure this is empty for new entries
    });
    setNmhAddOrEdit(true);
  };

  // Handle closing the form
  const nmhHandleClose = () => {
    setNmhAddOrEdit(false);
  };

  // Handle form submission
  const nmhHandleSubmit = async () => {
    try {
      if (nmhStudent.NmhMaSV) {
        // Update student
        await axios.put(`NmhSinhVien/${nmhStudent.NmhMaSV}`, nmhStudent);
      } else {
        // Add new student
        await axios.post("NmhSinhVien", nmhStudent);
      }
      nmhGetAllStudent(); // Refresh the list after submission
      setNmhAddOrEdit(false);
    } catch (error) {
      console.error("Error saving student data:", error);
    }
  };

  // Handle deleting a student
  const nmhHandleDelete = async (id) => {
    if (window.confirm("Bạn có muốn xóa không?")) {
      try {
        await axios.delete(`NmhSinhVien/${id}`);
        nmhGetAllStudent(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting student:", error);
      }
    }
  };

  return (
    <div className='container border my-3'>
      <h1>Lam viec voi API</h1>
      <hr />
      <NmhListStudent renderNmhListStudent={nmhListStudent} onNmhDelete={nmhHandleDelete} />
      <button className='btn btn-primary' onClick={nmhHandleAddNew}>Thêm mới</button>
      <hr />
      {nmhAddOrEdit && (
        <NmhAddOrEdit
          renderStudent={nmhStudent}
          onNmhClose={nmhHandleClose}
          onNmhSubmitForm={nmhHandleSubmit}
        />
      )}
    </div>
  );
};

export default NmhApp;
