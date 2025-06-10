import React, { useState, useEffect } from 'react';
import initialData from '../data/galeri.json';
const GalleryPage = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ id: null, tipe: 'Gambar', judul: '', link: '' });
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => { setData(initialData); }, []);
  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => { setIsEditing(false); setForm({ id: null, tipe: 'Gambar', judul: '', link: '' }); };
  const handleSubmit = (e) => { e.preventDefault(); if (!form.link) return; setData(isEditing ? data.map(i => i.id === form.id ? form : i) : [...data, { ...form, id: Date.now() }]); resetForm(); };
  const handleEdit = (item) => { setIsEditing(true); setForm(item); };
  const handleDelete = (id) => { if (window.confirm("Yakin?")) { setData(data.filter(i => i.id !== id)); }};
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Galeri Media</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Media' : 'Tambah Media Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="judul" value={form.judul} onChange={handleInputChange} placeholder="Judul Media" className="w-full px-3 py-2 border rounded-md" required />
          <input type="text" name="link" value={form.link} onChange={handleInputChange} placeholder="Link URL (Gambar atau Video Embed)" className="w-full px-3 py-2 border rounded-md" required />
          <select name="tipe" value={form.tipe} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md"><option value="Gambar">Gambar</option><option value="Video">Video</option></select>
          <div className="flex space-x-4"><button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>{isEditing && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-md">Batal</button>}</div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{data.map(item => (<div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">{item.tipe === 'Gambar' ? (<img src={item.link} alt={item.judul} className="w-full h-48 object-cover" onError={(e) => e.target.src='https://placehold.co/600x400?text=Invalid+Link'}/>) : (<iframe src={item.link} title={item.judul} className="w-full h-48" allowFullScreen></iframe>)}<div className="p-4"><h3 className="font-bold">{item.judul}</h3><p className="text-sm text-gray-500">{item.tipe}</p><div className="mt-4 space-x-2"><button onClick={() => handleEdit(item)} className="text-sm">Edit</button><button onClick={() => handleDelete(item.id)} className="text-sm text-red-600">Hapus</button></div></div></div>))}</div>
    </div>
  );
};
export default GalleryPage;