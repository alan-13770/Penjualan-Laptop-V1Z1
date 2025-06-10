import React from 'react';
import { Link } from 'react-router-dom';
const RegisterPage = () => (<div className="flex items-center justify-center min-h-screen bg-gray-100"><div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"><h2 className="text-2xl font-bold text-center">Buat Akun Baru</h2><p className="text-center text-sm">Sudah punya akun? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login di sini</Link></p></div></div>);
export default RegisterPage;