import React, { useState, useEffect } from "react";
import { faqAPI } from './services/faqAPI';


const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState({ id: null, pertanyaan: "", jawaban: "" });
  const [isEditing, setIsEditing] = useState(false);

  const loadFaqs = async () => {
    const data = await faqAPI.fetchFaqs();
    setFaqs(data.map(d => ({
      id: d.id,
      pertanyaan: d.question,
      jawaban: d.answer
    })));
  };

  useEffect(() => {
    loadFaqs();
  }, []);

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setIsEditing(false);
    setForm({ id: null, pertanyaan: "", jawaban: "" });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!form.pertanyaan || !form.jawaban) return alert("Isi semua field");

      if (isEditing) {
        await faqAPI.updateFaq(form.id, form);
      } else {
        await faqAPI.createFaq(form);
      }
      await loadFaqs();
      resetForm();
    } catch (error) {
      alert("Gagal simpan FAQ: " + error.message);
      console.error(error);
    }
  };

  const handleEdit = faq => {
    setIsEditing(true);
    setForm(faq);
  };

  const handleDelete = async id => {
    if (window.confirm("Yakin ingin menghapus?")) {
      await faqAPI.deleteFaq(id);
      await loadFaqs();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manajemen FAQ</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8 space-y-4">
        <div>
          <label>Pertanyaan</label>
          <input
            type="text"
            name="pertanyaan"
            value={form.pertanyaan}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label>Jawaban</label>
          <textarea
            name="jawaban"
            value={form.jawaban}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded">
            {isEditing ? "Update" : "Simpan"}
          </button>
          {isEditing && (
            <button type="button" onClick={resetForm} className="px-4 py-2 bg-gray-300 rounded">
              Batal
            </button>
          )}
        </div>
      </form>

      <div>
        {faqs.map(faq => (
          <div key={faq.id} className="bg-white p-4 rounded shadow mb-3">
            <div className="flex justify-between">
              <h3 className="font-semibold">{faq.pertanyaan}</h3>
              <div>
                <button onClick={() => handleEdit(faq)} className="text-blue-600 mr-4">
                  Edit
                </button>
                <button onClick={() => handleDelete(faq.id)} className="text-red-600">
                  Hapus
                </button>
              </div>
            </div>
            <p className="mt-2">{faq.jawaban}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
