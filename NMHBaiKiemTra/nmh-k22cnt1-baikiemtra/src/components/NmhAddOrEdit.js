import React, { useEffect, useState } from 'react';
import axios from '../api/nmhApi'; // Đảm bảo đường dẫn đúng

export default function NmhAddOrEdit({ onNmhClose, onNmhSubmitForm, renderStudent }) {
    console.log(renderStudent);
    const [nmhMaSV, setNmhMaSV] = useState("");
    const [nmhHoSV, setNmhHoSV] = useState("");
    const [nmhTenSV, setNmhTenSV] = useState("");
    const [nmhPhai, setNmhPhai] = useState("");
    const [nmhNgaySinh, setNmhNgaySinh] = useState("");
    const [nmhNoiSinh, setNmhNoiSinh] = useState("");
    const [nmhMaKH, setNmhMaKH] = useState("");
    const [nmhHocBong, setNmhHocBong] = useState("");
    const [nmhDiemTrungBinh, setNmhDiemTrungBinh] = useState("");

    useEffect(() => {
        if (renderStudent) {
            setNmhMaSV(renderStudent.MaSV || "");
            setNmhHoSV(renderStudent.HoSV || "");
            setNmhTenSV(renderStudent.TenSV || "");
            setNmhPhai(renderStudent.Phai || "");
            setNmhNgaySinh(renderStudent.NgaySinh || "");
            setNmhNoiSinh(renderStudent.NoiSinh || "");
            setNmhMaKH(renderStudent.MaKH || "");
            setNmhHocBong(renderStudent.HocBong || "");
            setNmhDiemTrungBinh(renderStudent.DiemTrungBinh || "");
        }
    }, [renderStudent]);

    const nmhHandleClose = () => {
        onNmhClose(false);
    };

    const nmhHandleSubmit = async (event) => {
        event.preventDefault();
        const nmhObjectStudent = {
            MaSV: nmhMaSV,
            HoSV: nmhHoSV,
            TenSV: nmhTenSV,
            Phai: nmhPhai,
            NgaySinh: nmhNgaySinh,
            NoiSinh: nmhNoiSinh,
            MaKH: nmhMaKH,
            HocBong: nmhHocBong,
            DiemTrungBinh: nmhDiemTrungBinh
        };

        try {
            if (renderStudent) {
                await axios.put(`nmhStudent/${renderStudent.id}`, nmhObjectStudent);
            } else {
                await axios.post("nmhStudent", nmhObjectStudent);
            }
            onNmhSubmitForm(false);
        } catch (error) {
            console.error("Có lỗi xảy ra khi gửi dữ liệu:", error);
        }
    };

    return (
        <div className='border'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaSV">MaSV</span>
                <input type="text" className="form-control"
                    name='MaSV' value={nmhMaSV} onChange={(ev) => setNmhMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HoSV">HoSV</span>
                <input type="text" className="form-control"
                    name='HoSV' value={nmhHoSV} onChange={(ev) => setNmhHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="TenSV">TenSV</span>
                <input type="text" className="form-control"
                    name='TenSV' value={nmhTenSV} onChange={(ev) => setNmhTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="Phai">Phai</span>
                <input type="text" className="form-control"
                    name='Phai' value={nmhPhai} onChange={(ev) => setNmhPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="NgaySinh">NgaySinh</span>
                <input type="date" className="form-control"
                    name='NgaySinh' value={nmhNgaySinh} onChange={(ev) => setNmhNgaySinh(ev.target.value)}
                    placeholder="NgaySinh" aria-label="NgaySinh" aria-describedby="NgaySinh" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" className="form-control"
                    name='NoiSinh' value={nmhNoiSinh} onChange={(ev) => setNmhNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="MaKH">MaKH</span>
                <input type="text" className="form-control"
                    name='MaKH' value={nmhMaKH} onChange={(ev) => setNmhMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HocBong">HocBong</span>
                <input type="text" className="form-control"
                    name='HocBong' value={nmhHocBong} onChange={(ev) => setNmhHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="number" className="form-control"
                    name='DiemTrungBinh' value={nmhDiemTrungBinh} onChange={(ev) => setNmhDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnNmhSave' onClick={nmhHandleSubmit}>Ghi lai</button>
            <button className='btn btn-danger' onClick={nmhHandleClose}>Dong</button>
        </div>
    );
}
