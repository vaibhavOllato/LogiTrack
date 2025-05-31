import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaTruck } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("admin");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    login({ name, email, role, token: "fake-jwt-token" });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-7/12 w-full bg-teal-600 text-white flex flex-col items-center justify-center p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-white text-teal-600 p-2 rounded-full shadow-md">
            <FaTruck size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">LogiTrack AI</h1>
        </div>
        <p className="text-base text-slate-100 max-w-md text-center">
          Create an account to manage your deliveries, tasks, and logistics
          smarter with LogiTrack.
        </p>
      </div>

      {/* Right Side */}
      <div className="lg:w-5/12 w-full bg-slate-50 flex items-center justify-center px-3 py-3">
        <div className="bg-white border border-slate-300 rounded-xl shadow-xl max-w-sm w-full p-4">
          <h2 className="text-xl font-bold text-slate-900 mb-1 text-center">
            Register
          </h2>
          <p className="text-teal-600 text-xs font-medium mb-4 text-center">
            Start using the logistics dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label
                htmlFor="name"
                className="block text-slate-700 font-medium mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-slate-700 font-medium mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-slate-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-slate-700 font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-slate-700 font-medium mb-1"
              >
                Role
              </label>
              <select
                id="role"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="dispatcher">Dispatcher</option>
                <option value="driver">Driver</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md font-semibold hover:bg-teal-700 transition shadow-sm"
            >
              Register
            </button>
          </form>

          <p className="mt-3 text-center text-xs text-slate-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
