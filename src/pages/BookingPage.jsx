import React from 'react';
const bookings = [
    {id: 1, nama: 'Dewi Anjani', produk: 'Asus ROG Zephyrus G14', tanggal: '2025-06-10'},
    {id: 2, nama: 'Bambang P.', produk: 'Macbook Pro 14 M3', tanggal: '2025-06-11'},
];

const BookingPage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6">Manajemen Booking / Pesanan</h1>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left">
                <thead><tr className="bg-gray-50"><th className="p-4">Nama Pelanggan</th><th className="p-4">Produk Dipesan</th><th className="p-4">Tanggal Pesan</th><th className="p-4">Aksi</th></tr></thead>
                <tbody className="divide-y">
                    {bookings.map(item => (
                        <tr key={item.id}>
                            <td className="p-4">{item.nama}</td>
                            <td className="p-4">{item.produk}</td>
                            <td className="p-4">{item.tanggal}</td>
                            <td className="p-4"><button className="text-sm text-green-600">Tandai Selesai</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
export default BookingPage;