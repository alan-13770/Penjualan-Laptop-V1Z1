import React from 'react';
// Data statis sebagai contoh
const testimonials = [
  { id: 1, nama: "Rina", kota: "Jakarta", pesan: "Pelayanannya cepat, laptop sampai dengan aman. Recommended seller!" },
  { id: 2, nama: "Agus", kota: "Surabaya", pesan: "Adminnya ramah dan sangat membantu dalam memilih laptop sesuai budget. Terima kasih!" }
];

const TestimonialsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manajemen Testimoni</h1>
      <div className="space-y-4">
        {testimonials.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{item.nama} <span className="text-sm font-normal text-gray-500">- {item.kota}</span></h3>
                <p className="mt-1 text-gray-600">"{item.pesan}"</p>
              </div>
              <button className="text-sm text-red-600">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialsPage;