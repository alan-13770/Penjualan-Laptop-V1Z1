import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

const Forgot = () => {
    return (
        <AuthLayout>
            <h2 className="mb-2 text-2xl font-semibold text-center text-gray-700">
                Forgot Your Password?
            </h2>
            <p className="mb-6 text-sm text-center text-gray-500">
                Enter your email address and we'll send you a link.
            </p>
            <form>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email Address
                    </label>
                    <input type="email" className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50" />
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600"
                >
                    Send Reset Link
                </button>
                 <p className="mt-4 text-sm text-center text-gray-600">
                    <Link to="/login" className="text-blue-600 hover:underline">← Back to Login</Link>
                </p>
            </form>
        </AuthLayout>
    );
};
export default Forgot;