import React, { useState, useEffect } from 'react';
import initialData from '../data/artikel.json';

const ArtikelPage = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ id: null, judul: '', penulis: '', konten: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => { setData(initialData); }, []);
  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => { setIsEditing(false); setForm({ id: null, judul: '', penulis: '', konten: '' }); };
  const handleSubmit = (e) => { e.preventDefault(); if (!form.judul) return; setData(isEditing ? data.map(i => i.id === form.id ? form : i) : [...data, { ...form, id: Date.now() }]); resetForm(); };
  const handleEdit = (item) => { setIsEditing(true); setForm(item); };
  const handleDelete = (id) => { if (window.confirm("Yakin?")) { setData(data.filter(i => i.id !== id)); }};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Artikel</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Artikel' : 'Tambah Artikel Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="judul" value={form.judul} onChange={handleInputChange} placeholder="Judul Artikel" className="w-full px-3 py-2 border rounded-md" required />
          <input type="text" name="penulis" value={form.penulis} onChange={handleInputChange} placeholder="Nama Penulis" className="w-full px-3 py-2 border rounded-md" required />
          <textarea name="konten" value={form.konten} onChange={handleInputChange} placeholder="Isi Konten Artikel" className="w-full px-3 py-2 border rounded-md h-32" required />
          <div className="flex space-x-4">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>
            {isEditing && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-md">Batal</button>}
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead><tr className="bg-gray-50"><th className="p-4">Judul</th><th className="p-4">Penulis</th><th className="p-4">Aksi</th></tr></thead>
          <tbody className="divide-y">
            {data.map(item => (
              <tr key={item.id}>
                <td className="p-4 font-bold">{item.judul}</td><td className="p-4">{item.penulis}</td>
                <td className="p-4 space-x-2"><button onClick={() => handleEdit(item)} className="text-sm">Edit</button><button onClick={() => handleDelete(item.id)} className="text-sm text-red-600">Hapus</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ArtikelPage;