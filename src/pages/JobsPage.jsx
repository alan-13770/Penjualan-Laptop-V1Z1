import React, { useState, useEffect } from 'react';
import { careerAPI } from './services/careerAPI';

const emptyForm = {
  id: null,
  position: '',
  description: '',
  requirements: '',
  type: 'Full-time',
  location: ''
};

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const data = await careerAPI.fetchAll();
    setJobs(data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.position || !form.description) return;
    isEditing
      ? await careerAPI.update(form.id, form)
      : await careerAPI.create(form);
    resetForm();
    fetchJobs();
  };

  const handleEdit = (job) => {
    setForm(job);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin menghapus lowongan ini?")) {
      await careerAPI.delete(id);
      fetchJobs();
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Karir</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Lowongan" : "Tambah Lowongan"}</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input name="position" value={form.position} onChange={handleChange} placeholder="Posisi" required className="border px-3 py-2 rounded" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Lokasi" className="border px-3 py-2 rounded" />
          <select name="type" value={form.type} onChange={handleChange} className="border px-3 py-2 rounded">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi" className="border px-3 py-2 rounded" />
          <textarea name="requirements" value={form.requirements} onChange={handleChange} placeholder="Persyaratan (pisahkan dengan ;)" className="border px-3 py-2 rounded" />
          <div className="flex gap-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">{isEditing ? "Update" : "Simpan"}</button>
            {isEditing && <button type="button" onClick={resetForm} className="bg-gray-300 px-6 py-2 rounded">Batal</button>}
          </div>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3">Posisi</th>
              <th className="p-3">Lokasi</th>
              <th className="p-3">Tipe</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="border-t">
                <td className="p-3 font-bold">{job.position}</td>
                <td className="p-3">{job.location}</td>
                <td className="p-3">{job.type}</td>
                <td className="p-3 space-x-3">
                  <button onClick={() => handleEdit(job)} className="text-blue-600 text-sm">Edit</button>
                  <button onClick={() => handleDelete(job.id)} className="text-red-600 text-sm">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobsPage;
