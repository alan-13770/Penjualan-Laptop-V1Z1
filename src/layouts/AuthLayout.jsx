import React from 'react';

const AuthLayout = ({ children }) => (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            {children}
        </div>
    </div>
);
export default AuthLayout;