import React from 'react';
const messages = [
    {id: 1, nama: 'Sari', email: 'sari@example.com', pesan: 'Halo, apakah stok Dell XPS 15 masih ada?'},
    {id: 2, nama: 'Joko', email: 'joko@example.com', pesan: 'Saya ingin bertanya mengenai promo kartu kredit.'},
];

const KontakMasukPage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6">Manajemen Kontak Masuk</h1>
        <div className="space-y-4">
            {messages.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold">{item.nama} <span className="text-sm font-normal text-gray-500">- {item.email}</span></h3>
                            <p className="mt-1 text-gray-600">{item.pesan}</p>
                        </div>
                        <button className="text-sm text-red-600">Hapus</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
export default KontakMasukPage;