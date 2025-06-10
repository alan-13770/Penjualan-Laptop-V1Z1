import React, { useState, useEffect } from 'react';
import initialTim from '../data/tim.json';

const TeamPage = () => {
  const [tim, setTim] = useState([]);
  const [form, setForm] = useState({ id: null, nama: '', jabatan: '', foto: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => { setTim(initialTim); }, []);

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => { setIsEditing(false); setForm({ id: null, nama: '', jabatan: '', foto: '' }); };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nama || !form.jabatan) return;
    const fotoDefault = `https://placehold.co/100x100/EFEFEF/AAAAAA&text=${form.nama.charAt(0)}`;
    const newAnggota = { ...form, id: form.id || Date.now(), foto: form.foto || fotoDefault };
    setTim(isEditing ? tim.map(t => t.id === form.id ? newAnggota : t) : [...tim, newAnggota]);
    resetForm();
  };
  const handleEdit = (anggota) => { setIsEditing(true); setForm(anggota); };
  const handleDelete = (id) => { if (window.confirm("Yakin?")) { setTim(tim.filter(t => t.id !== id)); }};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Tim/Karyawan</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Anggota Tim' : 'Tambah Anggota Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nama" value={form.nama} onChange={handleInputChange} placeholder="Nama Lengkap" className="w-full px-3 py-2 border rounded-md" required />
          <input type="text" name="jabatan" value={form.jabatan} onChange={handleInputChange} placeholder="Jabatan" className="w-full px-3 py-2 border rounded-md" required />
          <input type="text" name="foto" value={form.foto} onChange={handleInputChange} placeholder="URL Foto (opsional)" className="w-full px-3 py-2 border rounded-md" />
          <div className="flex space-x-4">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>
            {isEditing && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-md">Batal</button>}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tim.map(anggota => (
          <div key={anggota.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={anggota.foto} alt={anggota.nama} className="w-24 h-24 rounded-full mx-auto mb-4" onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/100x100?text=Error"}}/>
            <h3 className="font-bold text-lg">{anggota.nama}</h3>
            <p className="text-gray-500">{anggota.jabatan}</p>
            <div className="mt-4 space-x-2">
              <button onClick={() => handleEdit(anggota)} className="text-sm text-blue-600">Edit</button>
              <button onClick={() => handleDelete(anggota.id)} className="text-sm text-red-600">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TeamPage;