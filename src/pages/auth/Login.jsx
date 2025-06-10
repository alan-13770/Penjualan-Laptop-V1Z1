import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({ username: "kminchelle", password: "0lelplR" });

    const handleChange = (evt) => setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        axios.post("https://dummyjson.com/auth/login", {
            username: dataForm.username,
            password: dataForm.password,
        })
        .then((response) => {
            localStorage.setItem('userToken', response.data.token);
            navigate("/");
        })
        .catch((err) => setError(err.response?.data?.message || "An error occurred"))
        .finally(() => setLoading(false));
    };

    return (
        <div>
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Admin Log In</h2>
            <p className="mb-6 text-gray-500">Silakan masukkan detail Anda.</p>
            {error && <div className="flex items-center gap-2 p-3 mb-5 text-sm text-red-700 bg-red-100 rounded-md"><BsFillExclamationDiamondFill /> {error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div><label className="block mb-1 text-sm font-medium text-gray-700">Username</label><input type="text" name="username" value={dataForm.username} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-gray-50" required /></div>
                <div><label className="block mb-1 text-sm font-medium text-gray-700">Password</label><input type="password" name="password" value={dataForm.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg bg-gray-50" required /></div>
                <div className="flex justify-end text-sm"><Link to="/forgot" className="font-medium text-indigo-600 hover:text-indigo-500">Lupa Password?</Link></div>
                <button type="submit" disabled={loading} className="flex justify-center w-full py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 disabled:opacity-70">{loading ? <ImSpinner2 className="animate-spin" /> : 'Log In'}</button>
                <p className="text-sm text-center">Belum punya akun? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Daftar</Link></p>
            </form>
        </div>
    );
};
export default Login;