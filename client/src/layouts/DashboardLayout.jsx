import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

const DashboardLayout = ({ user }) => {
  const role = user?.role || 'admin' // fallback role

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with user role */}
      <Sidebar role={role} />

      <div className="flex-1 flex flex-col">
        {/* Navbar with user info */}
        <Navbar user={user} />

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
