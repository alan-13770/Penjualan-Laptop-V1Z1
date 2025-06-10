import React, { useState, useEffect } from 'react';
import initialProduks from '../data/produk.json';
import { FaPlus } from 'react-icons/fa';

const ProdukPage = () => {
  const [produks, setProduks] = useState([]);
  // Kode state dan fungsi (handleInputChange, handleSubmit, dll.) tetap sama seperti sebelumnya

  useEffect(() => { setProduks(initialProduks); }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Manajemen Produk</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          <FaPlus />
          Tambah Produk
        </button>
      </div>

      {/* Form bisa dibuat menjadi modal/pop-up jika diinginkan */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {produks.map((produk) => (
          <div key={produk.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <img src={produk.gambar} alt={produk.model} className="w-full h-40 object-cover" />
            <div className="p-4">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{produk.brand}</span>
              <h3 className="font-bold text-lg mt-2">{produk.model}</h3>
              <p className="text-sm text-gray-500 h-10">{produk.cpu} | {produk.ram}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-lg font-semibold text-indigo-600">Rp {Number(produk.harga).toLocaleString('id-ID')}</p>
                <p className="text-sm font-medium">Stok: {produk.stok}</p>
              </div>
              <div className="mt-4 pt-4 border-t flex space-x-2">
                 <button className="w-full px-3 py-1 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600">Edit</button>
                 <button className="w-full px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700">Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProdukPage;