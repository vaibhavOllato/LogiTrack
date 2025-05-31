import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa'

const Navbar = ({ user }) => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Left: User Info */}
      <div className="flex items-center gap-3">
        <FaUserCircle size={28} className="text-teal-600" />
        <div>
          <h1 className="text-lg font-semibold text-gray-800 leading-tight">
            Welcome, <span className="text-teal-600">{user?.name}</span>
          </h1>
          <p className="text-xs text-gray-500 capitalize">{user?.role || 'User'}</p>
        </div>
      </div>

      {/* Right: Logout Button */}
      <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition">
        <FaSignOutAlt size={16} />
        Logout
      </button>
    </header>
  )
}

export default Navbar
