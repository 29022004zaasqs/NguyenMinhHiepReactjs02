import React from 'react';
import axios from '../api/nmhApi';

export default function NmhListUsers({ renderNmhListUsers, onNmhDelete }) {
    console.log("NmhListUsers:", renderNmhListUsers);

    // Display data
    let nmhElementUser = renderNmhListUsers.map((nmhUser, index) => {
        return (
            <tr key={index}>
                <td>{nmhUser.id}</td>
                <td>{nmhUser.UserName}</td>
                <td>{nmhUser.Password}</td>
                <td>{nmhUser.Email}</td>
                <td>{nmhUser.Phone}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => nmhHandleDelete(nmhUser)}> Delete </button>
                </td>
            </tr>
        )
    });

    const nmhHandleDelete = async (param) => {
        if (window.confirm('Bạn có muốn xóa thật không?')) {
            await axios.delete("nmhUsers/" + param.id);
            onNmhDelete();
        }
    };

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
                        {nmhElementUser}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
