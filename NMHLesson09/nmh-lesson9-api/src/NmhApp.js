import React, { useState, useEffect } from 'react';
import './App.css';
import NmhListUser from './components/NmhListUser';
import axios from './api/nmhApi';  // Adjust this if you're using a custom instance

const NmhApp = () => {
  const [nmhListUser, setNmhListUser] = useState([]);

  const nmhGetAllUsers = async () => {
    try {
      const nmhResponse = await axios.get("nmhUsers");
      console.log("Api Data:", nmhResponse.data);
      setNmhListUser(nmhResponse.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    nmhGetAllUsers();
  }, []);

  return (
    <div className='container border my-3'>
      <h1>Làm việc với Mockapi</h1>
      <hr/>
      <NmhListUser renderNmhListUser={nmhListUser} />
    </div>
  );
};

export default NmhApp;
