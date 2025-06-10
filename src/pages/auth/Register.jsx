import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => (
    <div>
        <h2 className="mb-2 text-3xl font-bold text-gray-800">Buat Akun ✨</h2>
        <form className="mt-6 space-y-6">
            <div><label className="block mb-1 text-sm font-medium text-gray-700">Nama Lengkap</label><input className="w-full px-4 py-2 border rounded-lg bg-gray-50"/></div>
            <div><label className="block mb-1 text-sm font-medium text-gray-700">Email</label><input className="w-full px-4 py-2 border rounded-lg bg-gray-50"/></div>
            <div><label className="block mb-1 text-sm font-medium text-gray-700">Password</label><input type="password" className="w-full px-4 py-2 border rounded-lg bg-gray-50"/></div>
            <button type="submit" className="w-full py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">Buat Akun</button>
            <p className="text-sm text-center">Sudah punya akun? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log In</Link></p>
        </form>
    </div>
);
export default Register;