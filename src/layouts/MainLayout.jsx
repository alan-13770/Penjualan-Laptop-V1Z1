import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = () => {
    // Pengecekan login telah dihapus.
    // const isLoggedIn = localStorage.getItem('userToken');
    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace />;
    // }

    // Sekarang langsung menampilkan layout admin.
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="flex-1 p-6 md:p-10 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};
export default MainLayout;