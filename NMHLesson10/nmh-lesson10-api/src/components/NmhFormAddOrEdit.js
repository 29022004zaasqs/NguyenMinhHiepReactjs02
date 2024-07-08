import axios from '../api/nmhApi';
import React, { useEffect, useState } from 'react';

export default function NmhFormAddOrEdit({ onNmhClose, onNmhSubmitForm, renderUsers }) {

    console.log(renderUsers);
    const [nmhId, setNmhId] = useState(0);
    const [nmhUserName, setNmhUserName] = useState("");
    const [nmhPassword, setNmhPassword] = useState("");
    const [nmhEmail, setNmhEmail] = useState("");
    const [nmhPhone, setNmhPhone] = useState("");

    useEffect(() => {
        setNmhId(renderUsers.id);
        setNmhUserName(renderUsers.UserName);
        setNmhPassword(renderUsers.Password);
        setNmhEmail(renderUsers.Email);
        setNmhPhone(renderUsers.Phone);
    }, [renderUsers]);

    const nmhHandleClose = () => {
        onNmhClose(false);
    };

    const nmhHandleSubmit = async (event) => {
        event.preventDefault();
        console.log(nmhId, nmhUserName, nmhPassword, nmhEmail, nmhPhone);
        // post -> api
        let nmhObjUser = {
            UserName: nmhUserName,
            Password: nmhPassword,
            Email: nmhEmail,
            Phone: nmhPhone,
            id: nmhId
        };
        await axios.post("nmhUsers", nmhObjUser);
        onNmhSubmitForm(false);
    };

    return (
        <div className=''>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="id">Id</span>
                    <input type="text" className="form-control"
                        name='id' value={nmhId} onChange={(ev) => setNmhId(ev.target.value)}
                        placeholder="id" aria-label="id" aria-describedby="id" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="UserName">UserName</span>
                    <input type="text" className="form-control"
                        name='UserName' value={nmhUserName} onChange={(ev) => setNmhUserName(ev.target.value)}
                        placeholder="UserName" aria-label="UserName" aria-describedby="UserName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Password">Password</span>
                    <input type="password" className="form-control"
                        name='Password' value={nmhPassword} onChange={(ev) => setNmhPassword(ev.target.value)}
                        placeholder="Password" aria-label="Password" aria-describedby="Password" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Email">Email</span>
                    <input type="email" className="form-control"
                        name='Email' value={nmhEmail} onChange={(ev) => setNmhEmail(ev.target.value)}
                        placeholder="Email" aria-label="Email" aria-describedby="Email" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Phone">Phone</span>
                    <input type="number" className="form-control"
                        name='Phone' value={nmhPhone} onChange={(ev) => setNmhPhone(ev.target.value)}
                        placeholder="Phone" aria-label="Phone" aria-describedby="Phone" />
                </div>
                <button className='btn btn-primary' name='btnNmhSave' onClick={(ev) => nmhHandleSubmit(ev)}>Ghi lại</button>
                <button className='btn btn-danger' onClick={nmhHandleClose}>Đóng</button>
            </form>
        </div>
    )
}
