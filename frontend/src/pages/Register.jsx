import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../helpers/axiosInstance';

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await axiosInstance.post('accounts/register/', formData);
            navigate('/login');
        } catch (error) {
            console.log(error.response?.data);
        }
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Create Account
                    </h1>
                    <p className="text-slate-500 mt-2">
                        Register to manage your tasks.
                    </p>
                </div>

                <form
                    onSubmit={formSubmitHandler}
                    className="space-y-5"
                >
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm password"
                            value={formData.password2}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-slate-600">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;