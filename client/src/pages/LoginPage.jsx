import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { FaTruck } from 'react-icons/fa'

const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email === 'admin@example.com' && password === 'admin') {
      login({ name: 'Admin User', email, role: 'admin', token: 'fake-jwt-token' })
      navigate('/')
    } else if (email === 'driver@example.com' && password === 'driver') {
      login({ name: 'Driver Joe', email, role: 'driver', token: 'fake-jwt-token' })
      navigate('/')
    } else if (email === 'dispatcher@example.com' && password === 'dispatcher') {
      login({ name: 'Dispatcher Ann', email, role: 'dispatcher', token: 'fake-jwt-token' })
      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side (Company Info) */}
      <div className="lg:w-7/12 w-full bg-teal-600 text-white flex flex-col items-center justify-center p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white text-teal-600 p-3 rounded-full shadow-md">
            <FaTruck size={40} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">LogiTrack AI</h1>
        </div>
        <p className="text-lg text-slate-100 max-w-md text-center">
          Streamline your logistics and delivery operations with smart, real-time tracking and role-based efficiency.
        </p>
      </div>

      {/* Right Side (Login Form) */}
      <div className="lg:w-5/12 w-full bg-slate-50 flex items-center justify-center px-4 py-8">
        <div className="bg-white border border-slate-300 rounded-xl shadow-xl max-w-sm w-full p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-1 text-center">Sign In</h2>
          <p className="text-teal-600 text-sm font-medium mb-6 text-center">Access your logistics dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label htmlFor="email" className="block text-slate-700 font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-slate-700 font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-900"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2.5 rounded-md font-semibold hover:bg-teal-700 transition shadow-sm"
            >
              Sign In
            </button>
          </form>

          <p className="mt-5 text-center text-slate-500 text-xs">
            &copy; 2025 LogiTrack AI. All rights reserved.
          </p>

          <p className="mt-3 text-center text-sm text-slate-700">
            Don't have an account?{' '}
            <Link to="/register" className="text-teal-600 font-semibold hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
