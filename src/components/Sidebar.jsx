import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaLaptop, FaNewspaper, FaQuestionCircle, FaUsers, FaBriefcase, FaStar, FaCalendarCheck, FaEnvelope, FaUserCog, FaBuilding, FaImages } from 'react-icons/fa';

const MenuSection = ({ title, children }) => (
  <div><h3 className="px-4 py-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">{title}</h3><ul>{children}</ul></div>
);
const MenuItem = ({ icon, name, path }) => {
  const linkClass = "flex items-center p-3 my-1 mx-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors";
  const activeLinkClass = "bg-indigo-600 text-white";
  return (<li><NavLink to={path} className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}><span className="mr-3 text-lg">{icon}</span>{name}</NavLink></li>);
};
const Sidebar = () => (
    <div className="flex flex-col w-64 text-white bg-gray-800">
        <div className="py-6 text-2xl font-bold text-center border-b border-gray-700">Laptop Store</div>
        <nav className="flex-grow py-4 overflow-y-auto">
            <MenuSection title="Menu Utama">
                <MenuItem name="Dashboard" icon={<FaTachometerAlt />} path="/" />
                <MenuItem name="Produk" icon={<FaLaptop />} path="/produk" />
                <MenuItem name="User & Role" icon={<FaUserCog />} path="/users" />
                <MenuItem name="Artikel" icon={<FaNewspaper />} path="/artikel" />
            </MenuSection>
            <MenuSection title="Manajemen Konten">
                <MenuItem name="FAQ" icon={<FaQuestionCircle />} path="/faq" />
                <MenuItem name="Tim" icon={<FaUsers />} path="/tim" />
                <MenuItem name="Testimoni" icon={<FaStar />} path="/testimoni" />
                <MenuItem name="Galeri" icon={<FaImages />} path="/galeri" />
            </MenuSection>
            <MenuSection title="Lainnya">
                <MenuItem name="Lowongan" icon={<FaBriefcase />} path="/lowongan" />
                <MenuItem name="Booking" icon={<FaCalendarCheck />} path="/booking" />
                <MenuItem name="Kontak Masuk" icon={<FaEnvelope />} path="/kontak" />
                <MenuItem name="Profil Perusahaan" icon={<FaBuilding />} path="/profil" />
            </MenuSection>
        </nav>
    </div>
);
export default Sidebar;
