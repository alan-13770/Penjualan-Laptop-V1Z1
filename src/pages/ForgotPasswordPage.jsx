import React from 'react';
import { Link } from 'react-router-dom';
const ForgotPasswordPage = () => (<div className="flex items-center justify-center min-h-screen bg-gray-100"><div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md"><h2 className="text-2xl font-bold text-center">Lupa Password</h2><p className="text-center text-sm">Kembali ke halaman <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Login</Link></p></div></div>);
export default ForgotPasswordPage;