import React from 'react';
import StudentItem from './NmhStudentItem';


export default function NmhStudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h2>Danh sách Sinh viên</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Hoạt động</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentItem 
              key={student.nmhId} 
              student={student} 
              onEdit={onEdit} 
              onDelete={onDelete} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
