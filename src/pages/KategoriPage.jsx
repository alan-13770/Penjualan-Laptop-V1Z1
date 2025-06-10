import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import Loading from '../components/common/Loading';
import ErrorState from '../components/common/ErrorState';
import EmptyState from '../components/common/EmptyState';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const KategoriPage = () => {
  const [kategori, setKategori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // State untuk form
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: null, nama_kategori: '', deskripsi: '' });

  // Fungsi untuk mengambil data dari Supabase
  async function fetchKategori() {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('kategori')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setKategori(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchKategori();
  }, []);

  // Fungsi untuk handle submit (Create & Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nama_kategori, deskripsi } = currentItem;

    try {
      let error;
      if (isEditing) {
        // Update data
        ({ error } = await supabase
          .from('kategori')
          .update({ nama_kategori, deskripsi })
          .eq('id', currentItem.id));
      } else {
        // Create data
        ({ error } = await supabase
          .from('kategori')
          .insert([{ nama_kategori, deskripsi }]));
      }
      if (error) throw error;
      setShowForm(false);
      fetchKategori(); // Refresh data
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  // Fungsi untuk handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kategori ini?")) {
      try {
        const { error } = await supabase
          .from('kategori')
          .delete()
          .eq('id', id);
        if (error) throw error;
        fetchKategori(); // Refresh data
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };
  
  // Fungsi untuk membuka form
  const handleShowForm = (item = null) => {
    if(item) {
        setIsEditing(true);
        setCurrentItem(item);
    } else {
        setIsEditing(false);
        setCurrentItem({ id: null, nama_kategori: '', deskripsi: '' });
    }
    setShowForm(true);
  };
  
  // Menampilkan konten berdasarkan state
  const renderContent = () => {
    if (loading) return <Loading />;
    if (error) return <ErrorState message={error} />;
    if (kategori.length === 0) return <EmptyState onAction={() => handleShowForm()} />;

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <table className="w-full text-left">
          <thead><tr className="border-b text-sm text-gray-500"><th className="p-3">Nama Kategori</th><th className="p-3">Deskripsi</th><th className="p-3">Aksi</th></tr></thead>
          <tbody className="divide-y">{kategori.map(item => (
            <tr key={item.id}>
              <td className="p-3 font-semibold">{item.nama_kategori}</td>
              <td className="p-3 text-gray-600">{item.deskripsi}</td>
              <td className="p-3 flex space-x-2">
                <button onClick={() => handleShowForm(item)} className="p-2 text-gray-400 hover:text-indigo-600"><FaEdit /></button>
                <button onClick={() => handleDelete(item.id)} className="p-2 text-gray-400 hover:text-red-600"><FaTrash /></button>
              </td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Kategori Produk</h1>
        <button onClick={() => handleShowForm()} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"><FaPlus />Tambah Kategori</button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Kategori' : 'Tambah Kategori Baru'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nama Kategori" value={currentItem.nama_kategori} onChange={(e) => setCurrentItem({...currentItem, nama_kategori: e.target.value})} className="w-full p-3 border rounded-md" required />
              <textarea placeholder="Deskripsi" value={currentItem.deskripsi} onChange={(e) => setCurrentItem({...currentItem, deskripsi: e.target.value})} className="w-full p-3 border rounded-md" />
              <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-200 rounded-md">Batal</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {renderContent()}
    </div>
  );
};
export default KategoriPage;
