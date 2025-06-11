import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import AuthLayout from '../../layouts/AuthLayout';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({
        username: "kminchelle", // dummyjson uses 'username'
        password: "0lelplR",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        axios.post("https://dummyjson.com/auth/login", {
            username: dataForm.username,
            password: dataForm.password,
        })
        .then((response) => {
            console.log("Login Success:", response.data);
            localStorage.setItem('userToken', response.data.token);
            navigate("/"); // Arahkan ke dashboard (halaman utama)
        })
        .catch((err) => {
            setError(err.response?.data?.message || "Terjadi kesalahan");
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <AuthLayout>
            <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
                Welcome Back 👋
            </h2>
            {error && (
                <div className="flex items-center p-5 mb-5 text-sm font-light text-gray-600 bg-red-200 rounded">
                    <BsFillExclamationDiamondFill className="text-lg text-red-600 me-2" />
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        value={dataForm.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
                        placeholder="kminchelle"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm bg-gray-50"
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center w-full px-4 py-2 mb-4 font-semibold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600 disabled:opacity-50"
                >
                    {loading ? <ImSpinner2 className="animate-spin" /> : 'Login'}
                </button>

                <div className="flex justify-between text-sm text-gray-600">
                    <Link to="/forgot" className="text-blue-600 hover:underline">
                        Forgot Password?
                    </Link>
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
};
export default Login;