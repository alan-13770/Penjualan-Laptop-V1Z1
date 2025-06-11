import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

const Register = () => {
    return (
        <AuthLayout>
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
                Create Your Account ✨
            </h2>
            <form>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50" />
                </div>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input type="email" className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50" />
                </div>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input type="password" className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50" />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
                >
                    Register
                </button>
                 <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};
export default Register;