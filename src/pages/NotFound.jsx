import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-gray-100">
            <h1 className="text-6xl font-bold text-indigo-600 md:text-9xl">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800 md:text-4xl">Halaman Tidak Ditemukan</h2>
            <p className="max-w-md mt-2 text-gray-500">Maaf, halaman yang Anda coba akses tidak ada, telah dihapus, atau mungkin Anda salah mengetik alamat.</p>
            <Link 
                to="/" 
                className="px-6 py-3 mt-8 font-semibold text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
                Kembali ke Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
