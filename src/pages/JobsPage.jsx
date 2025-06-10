import React, { useState, useEffect } from 'react';
import initialLowongan from '../data/lowongan.json';

const JobsPage = () => {
  const [lowongan, setLowongan] = useState([]);
  const [form, setForm] = useState({ id: null, posisi: '', deskripsi: '', status: 'Buka' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => { setLowongan(initialLowongan); }, []);

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => { setIsEditing(false); setForm({ id: null, posisi: '', deskripsi: '', status: 'Buka' }); };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.posisi) return;
    setLowongan(isEditing ? lowongan.map(l => l.id === form.id ? form : l) : [...lowongan, { ...form, id: Date.now() }]);
    resetForm();
  };
  const handleEdit = (job) => { setIsEditing(true); setForm(job); };
  const handleDelete = (id) => { if (window.confirm("Yakin?")) { setLowongan(lowongan.filter(l => l.id !== id)); }};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Lowongan Kerja</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Lowongan' : 'Tambah Lowongan Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="posisi" value={form.posisi} onChange={handleInputChange} placeholder="Posisi Jabatan" className="w-full px-3 py-2 border rounded-md" required />
          <textarea name="deskripsi" value={form.deskripsi} onChange={handleInputChange} placeholder="Deskripsi Pekerjaan" className="w-full px-3 py-2 border rounded-md" />
          <select name="status" value={form.status} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md">
            <option value="Buka">Buka</option>
            <option value="Tutup">Tutup</option>
          </select>
          <div className="flex space-x-4">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>
            {isEditing && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-md">Batal</button>}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">
          <thead><tr className="bg-gray-50"><th className="p-4">Posisi</th><th className="p-4">Deskripsi</th><th className="p-4">Status</th><th className="p-4">Aksi</th></tr></thead>
          <tbody className="divide-y">
            {lowongan.map(job => (
              <tr key={job.id}>
                <td className="p-4 font-bold">{job.posisi}</td>
                <td className="p-4 text-gray-600">{job.deskripsi}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${job.status === 'Buka' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{job.status}</span>
                </td>
                <td className="p-4 space-x-2"><button onClick={() => handleEdit(job)} className="text-sm">Edit</button><button onClick={() => handleDelete(job.id)} className="text-sm text-red-600">Hapus</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default JobsPage;
