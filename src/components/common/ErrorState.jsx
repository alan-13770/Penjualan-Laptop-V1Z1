import React from 'react';
const ErrorState = ({ message }) => (
  <div className="text-center p-10 bg-red-50 text-red-700 rounded-lg">
    <h3 className="font-bold">Terjadi Kesalahan</h3>
    <p>{message || "Tidak dapat memuat data. Silakan coba lagi nanti."}</p>
  </div>
);
export default ErrorState;