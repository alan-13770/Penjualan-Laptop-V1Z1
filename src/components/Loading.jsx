import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <ImSpinner2 className="text-4xl text-indigo-600 animate-spin" />
      <p className="mt-4 text-gray-600">Memuat...</p>
    </div>
  );
};
export default Loading;