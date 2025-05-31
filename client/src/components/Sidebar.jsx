import { Link, useLocation } from 'react-router-dom'
import { FaTachometerAlt, FaTruck, FaUsers, FaChartBar, FaCog, FaUser, FaClipboardList, FaMagic } from 'react-icons/fa'

const Sidebar = ({ role }) => {
  const location = useLocation()

  const menu = {
    admin: [
      { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      { name: "Deliveries", path: "/deliveries", icon: <FaTruck /> },
      { name: "Drivers", path: "/drivers", icon: <FaUsers /> },
      { name: "Analytics", path: "/analytics", icon: <FaChartBar /> },
      { name: "Settings", path: "/settings", icon: <FaCog /> }
    ],
    dispatcher: [
      { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
      { name: "Deliveries", path: "/deliveries", icon: <FaClipboardList /> },
      { name: "Auto-Assign", path: "/auto-assign", icon: <FaMagic /> }
    ],
    driver: [
      { name: "My Deliveries", path: "/my-deliveries", icon: <FaTruck /> },
      { name: "Profile", path: "/profile", icon: <FaUser /> }
    ]
  }

  return (
    <aside className="w-60 h-screen bg-teal-600 text-white flex flex-col px-3 py-4 shadow-md">
      <div className="text-xl font-bold mb-4 px-2 tracking-wide">🚚 LogiTrack</div>
      <nav className="flex flex-col gap-1 text-sm">
        {(menu[role] || []).map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
              location.pathname === item.path
                ? 'bg-teal-600 font-semibold'
                : 'hover:bg-teal-700 hover:pl-4'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
