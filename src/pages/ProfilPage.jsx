import React from 'react';
const ProfilPage = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Informasi Profil Perusahaan</h1>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form className="space-y-4">
        <div><label className="block font-medium">Nama Perusahaan</label><input type="text" defaultValue="Toko Laptop Jaya" className="w-full px-3 py-2 mt-1 border rounded-md" /></div>
        <div><label className="block font-medium">Alamat</label><input type="text" defaultValue="Jl. Sudirman No. 123, Pekanbaru" className="w-full px-3 py-2 mt-1 border rounded-md" /></div>
        <div><label className="block font-medium">Lokasi (Google Maps Link)</label><input type="text" defaultValue="https://maps.google.com/..." className="w-full px-3 py-2 mt-1 border rounded-md" /></div>
        <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-md">Simpan Perubahan</button>
      </form>
    </div>
  </div>
);
export default ProfilPage;