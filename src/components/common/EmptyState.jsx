import React from 'react';
const EmptyState = ({ message, onAction, actionText }) => (
  <div className="text-center p-10 border-2 border-dashed rounded-lg">
    <h3 className="font-bold text-gray-700">Tidak Ada Data</h3>
    <p className="text-gray-500">{message || "Belum ada data yang ditambahkan."}</p>
    {onAction && (
      <button onClick={onAction} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        {actionText || "Tambah Data"}
      </button>
    )}
  </div>
);
export default EmptyState;