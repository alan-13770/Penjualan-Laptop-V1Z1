// src/pages/TeamPage.jsx
import React, { useState, useEffect } from 'react';
import { teamAPI } from './services/teamAPI';

const TeamPage = () => {
  const [tim, setTim] = useState([]);
  const [form, setForm] = useState({ id: null, nama: '', jabatan: '', foto: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchTim();
  }, []);

  const fetchTim = async () => {
    try {
      const data = await teamAPI.fetchAll();
      setTim(data);
    } catch (err) {
      console.error("Gagal memuat tim:", err);
    }
  };

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const resetForm = () => {
    setIsEditing(false);
    setForm({ id: null, nama: '', jabatan: '', foto: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.jabatan) return;

    const fotoDefault = `https://placehold.co/100x100/EFEFEF/AAAAAA&text=${form.nama.charAt(0)}`;
    const newData = {
      name: form.nama,
      position: form.jabatan,
      image: form.foto || fotoDefault,
      description: "", // tambahkan jika diperlukan
    };

    try {
      if (isEditing) {
        await teamAPI.update(form.id, newData);
      } else {
        await teamAPI.add(newData);
      }
      await fetchTim();
      resetForm();
    } catch (err) {
      console.error("Gagal menyimpan:", err);
    }
  };

  const handleEdit = (anggota) => {
    setIsEditing(true);
    setForm({
      id: anggota.id,
      nama: anggota.name,
      jabatan: anggota.position,
      foto: anggota.image,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus?")) return;
    try {
      await teamAPI.remove(id);
      await fetchTim();
    } catch (err) {
      console.error("Gagal menghapus:", err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Tim/Karyawan</h1>

      {/* FORM */}
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

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tim.map(anggota => (
          <div key={anggota.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img
              src={anggota.image}
              alt={anggota.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100?text=Error" }}
            />
            <h3 className="font-bold text-lg">{anggota.name}</h3>
            <p className="text-gray-500">{anggota.position}</p>
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
