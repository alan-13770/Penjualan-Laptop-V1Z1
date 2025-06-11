// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from 'react';
import { galleryAPI } from './services/GaleryAPI'

export default function GalleryPage() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: '',
    type: 'image',
    url: '',
    album_name: '',
    caption: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const items = await galleryAPI.fetchGalleryItems();
      setData(items);
    };
    fetchData();
  }, []);

  const resetForm = () => {
    setForm({
      id: null,
      title: '',
      type: 'image',
      url: '',
      album_name: '',
      caption: '',
    });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      title: form.title,
      type: form.type,
      url: form.url,
      album_name: form.album_name,
      caption: form.caption,
    };

    if (isEditing) {
      await galleryAPI.updateGalleryItem(form.id, newItem);
    } else {
      await galleryAPI.insertGalleryItem(newItem);
    }

    const refreshed = await galleryAPI.fetchGalleryItems();
    setData(refreshed);
    resetForm();
  };

  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus?")) {
      await galleryAPI.deleteGalleryItem(id);
      const refreshed = await galleryAPI.fetchGalleryItems();
      setData(refreshed);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="title"
          placeholder="Judul"
          value={form.title}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <input
          type="text"
          name="url"
          placeholder="URL Gambar/Video"
          value={form.url}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          name="album_name"
          placeholder="Nama Album"
          value={form.album_name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        <input
          type="text"
          name="caption"
          placeholder="Caption"
          value={form.caption}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isEditing ? 'Update' : 'Tambah'}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded-md shadow-sm">
            {item.type === 'image' ? (
              <img src={item.url} alt={item.title} className="w-full h-48 object-cover rounded-md mb-2" />
            ) : (
              <video controls className="w-full h-48 mb-2 rounded-md">
                <source src={item.url} />
              </video>
            )}
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.caption}</p>
            <p className="text-xs text-gray-400">Album: {item.album_name}</p>
            <div className="flex gap-2 mt-2">
              <button onClick={() => handleEdit(item)} className="px-3 py-1 bg-yellow-400 rounded text-sm">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
