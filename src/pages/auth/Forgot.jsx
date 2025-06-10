import React from 'react';
import { Link } from 'react-router-dom';

const Forgot = () => (
    <div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Lupa Password?</h2>
        <p className="mb-6 text-gray-500">Kami akan kirim tautan reset.</p>
        <form className="space-y-6">
            <div><label className="block mb-1 text-sm font-medium text-gray-700">Email</label><input className="w-full px-4 py-2 border rounded-lg bg-gray-50" placeholder="Masukkan email Anda" /></div>
            <button type="submit" className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">Kirim Tautan Reset</button>
            <p className="text-sm text-center"><Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">← Kembali ke Log In</Link></p>
        </form>
    </div>
);
export default Forgot;