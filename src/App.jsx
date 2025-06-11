import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import "./assets/tailwind.css";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Halaman Auth (di-import langsung untuk menghindari white screen)
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

// Halaman Utama (di-load secara lazy)
const Dashboard = React.lazy(() => import("./pages/DashboardPage"));
const ProdukPage = React.lazy(() => import("./pages/ProdukPage"));
const UsersPage = React.lazy(()=> import("./pages/Userspage"));
const ArtikelPage = React.lazy(() => import("./pages/ArtikelPage"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const TeamPage = React.lazy(() => import("./pages/TeamPage"));
const TestimonialsPage = React.lazy(() => import("./pages/TestimonialsPage"));
const GalleryPage = React.lazy(() => import("./pages/GalleryPage"));
const JobsPage = React.lazy(() => import("./pages/JobsPage"));
const BookingPage = React.lazy(() => import("./pages/BookingPage"));
const KontakMasukPage = React.lazy(() => import("./pages/KontakMasukPage"));
const ProfilPage = React.lazy(() => import("./pages/ProfilPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>
          
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/produk" element={<ProdukPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/artikel" element={<ArtikelPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/tim" element={<TeamPage />} />
            <Route path="/testimoni" element={<TestimonialsPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/lowongan" element={<JobsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/kontak" element={<KontakMasukPage />} />
            <Route path="/profil" element={<ProfilPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
