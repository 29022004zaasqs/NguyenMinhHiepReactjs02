import React from 'react';

export default function NmhListUser({ renderNmhListUser }) {
  console.log("NmhListUser:", renderNmhListUser);
  
  const NmhElementUser = renderNmhListUser.map((NmhUser, index) => (
    <tr key={index}>
      <td>{NmhUser.id}</td>
      <td>{NmhUser.Username}</td>
      <td>{NmhUser.Password}</td>
      <td>{NmhUser.Email}</td>
      <td>{NmhUser.phone}</td>
      <td>...</td>
    </tr>
  ));

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Id</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {NmhElementUser}
          </tbody>
        </table>
      </div>
    </div>
  );
}
