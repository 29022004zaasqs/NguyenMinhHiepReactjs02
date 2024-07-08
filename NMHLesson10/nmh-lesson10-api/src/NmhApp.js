import React, { useState, useEffect } from 'react';
import './App.css';
import NmhListUsers from './components/NmhListUsers';  // Ensure this matches the exact file name
import NmhFormAddOrEdit from './components/NmhFormAddOrEdit';
import axios from './api/nmhApi';  // Adjust this if you're using a custom instance

function NmhApp() {
  const [nmhListUsers, setNmhListUsers] = useState([]);

  const nmhGetAllUsers = async () => {
    const nmhResponse = await axios.get("nmhUsers");
    console.log("Api Data:", nmhResponse.data);
    setNmhListUsers(nmhResponse.data);
  };

  useEffect(() => {
    nmhGetAllUsers();
    console.log("State Data:", nmhListUsers);
  }, []);

  const [nmhAddOrEdit, setNmhAddOrEdit] = useState(false);
  const nmhInitUser = {
    UserName: "Nguyễn Minh Hiệp",
    Password: "22/12/2004",
    Email: "MinhHiep@gmail.com",
    Phone: "0978611889",
    id: "22001234"
  };
  const [nmhUser, setNmhUser] = useState(nmhInitUser);

  const nmhHandleAddNew = () => {
    setNmhAddOrEdit(true);
  };

  const nmhHandleClose = (param) => {
    setNmhAddOrEdit(param);
  };

  const nmhHandleSubmit = (param) => {
    nmhGetAllUsers();
    setNmhAddOrEdit(param);
  };

  const nmhHandleDelete = () => {
    nmhGetAllUsers();
  };

  let nmhElementForm = nmhAddOrEdit === true ?
    <NmhFormAddOrEdit renderUsers={nmhUser}
                      onNmhClose={nmhHandleClose}
                      onNmhSubmitForm={nmhHandleSubmit} /> : "";

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      <NmhListUsers renderNmhListUsers={nmhListUsers} onNmhDelete={nmhHandleDelete} />
      <button className='btn btn-primary' name='btnNmhThemMoi' onClick={nmhHandleAddNew}>Thêm mới</button>
      <hr />
      {nmhElementForm}
    </div>
  );
}

export default NmhApp;
