import React, { useState, useEffect } from 'react';
import initialData from '../data/users.json';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const UsersPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => { setData(initialData); }, []);

  const getRoleClass = (role) => {
    switch (role) {
      case 'Admin': return 'bg-red-100 text-red-700';
      case 'Editor': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700">
          <FaPlus />
          Create New User
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="p-3 font-medium">Nama</th>
                <th className="p-3 font-medium">Email</th>
                <th className="p-3 font-medium">Role</th>
                <th className="p-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-3 font-semibold text-gray-800">{item.nama}</td>
                  <td className="p-3 text-gray-600">{item.email}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-md ${getRoleClass(item.role)}`}>
                      {item.role}
                    </span>
                  </td>
                  <td className="p-3 flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-indigo-600"><FaEdit /></button>
                    <button className="p-2 text-gray-400 hover:text-red-600"><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UsersPage;