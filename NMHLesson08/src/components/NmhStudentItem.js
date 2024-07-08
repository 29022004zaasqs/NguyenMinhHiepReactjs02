import React from 'react';

export default function NmhStudentItem({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.nmhId}</td>
      <td>{student.nmhName}</td>
      <td>{student.nmhAge}</td>
      <td>{student.nmhIsActive ? 'Có' : 'Không'}</td>
      <td>
        <button className='btn btn-danger'  onClick={() => onEdit(student)}>Chỉnh sửa</button>
        <button className='btn btn-success' onClick={() => onDelete(student.nmhId)}>Xóa</button>
      </td>
    </tr>
  );
}
