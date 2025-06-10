import React, { useState, useEffect } from 'react';
import initialFaqs from '../data/faq.json';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState({ id: null, pertanyaan: '', jawaban: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => { setFaqs(initialFaqs); }, []);

  const handleInputChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const resetForm = () => { setIsEditing(false); setForm({ id: null, pertanyaan: '', jawaban: '' }); };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.pertanyaan || !form.jawaban) return;
    setFaqs(isEditing ? faqs.map(f => f.id === form.id ? form : f) : [...faqs, { ...form, id: Date.now() }]);
    resetForm();
  };
  const handleEdit = (faq) => { setIsEditing(true); setForm(faq); };
  const handleDelete = (id) => { if (window.confirm("Yakin?")) { setFaqs(faqs.filter(f => f.id !== id)); }};

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen FAQ</h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? 'Edit FAQ' : 'Tambah FAQ Baru'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Pertanyaan</label>
            <input type="text" name="pertanyaan" value={form.pertanyaan} onChange={handleInputChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
          </div>
          <div>
            <label className="block font-medium">Jawaban</label>
            <textarea name="jawaban" value={form.jawaban} onChange={handleInputChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
          </div>
          <div className="flex space-x-4">
            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">{isEditing ? 'Update' : 'Simpan'}</button>
            {isEditing && <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded-md">Batal</button>}
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.pertanyaan}</h3>
              <div className="space-x-2">
                <button onClick={() => handleEdit(faq)} className="text-sm text-blue-600">Edit</button>
                <button onClick={() => handleDelete(faq.id)} className="text-sm text-red-600">Hapus</button>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{faq.jawaban}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FaqPage;