// // src/pages/DashboardPage.jsx
// import React from "react";
// import {
//   FaTruck,
//   FaUsers,
//   FaBoxOpen,
//   FaChartLine,
//   FaMapMarkedAlt,
// } from "react-icons/fa";

// const DashboardPage = () => {
//   return (
//     <div className="p-4 lg:p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold text-teal-700">Welcome to LogiTrack Dashboard</h1>
//         <p className="text-slate-600 mt-1 text-sm md:text-base">
//           Manage your fleet, track deliveries, and get insights in real time.
//         </p>
//       </div>

//       {/* KPIs */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <div className="bg-white p-4 rounded-xl shadow border border-slate-100 flex items-center gap-4">
//           <FaTruck className="text-teal-600 text-3xl" />
//           <div>
//             <p className="text-sm text-slate-500">Active Deliveries</p>
//             <h2 className="text-xl font-bold text-slate-800">26</h2>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow border border-slate-100 flex items-center gap-4">
//           <FaUsers className="text-purple-600 text-3xl" />
//           <div>
//             <p className="text-sm text-slate-500">Drivers</p>
//             <h2 className="text-xl font-bold text-slate-800">12</h2>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow border border-slate-100 flex items-center gap-4">
//           <FaBoxOpen className="text-orange-500 text-3xl" />
//           <div>
//             <p className="text-sm text-slate-500">Pending Orders</p>
//             <h2 className="text-xl font-bold text-slate-800">9</h2>
//           </div>
//         </div>
//         <div className="bg-white p-4 rounded-xl shadow border border-slate-100 flex items-center gap-4">
//           <FaChartLine className="text-green-500 text-3xl" />
//           <div>
//             <p className="text-sm text-slate-500">Delivery Success Rate</p>
//             <h2 className="text-xl font-bold text-slate-800">96%</h2>
//           </div>
//         </div>
//       </div>

//       {/* Charts and Map */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//         <div className="col-span-2 bg-white p-4 rounded-xl shadow border border-slate-100">
//           <h3 className="font-semibold text-slate-800 mb-2">Delivery Trends</h3>
//           <div className="h-52 bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
//             [Chart Placeholder]
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-xl shadow border border-slate-100">
//           <h3 className="font-semibold text-slate-800 mb-2">Live Map</h3>
//           <div className="h-52 bg-slate-100 rounded-md flex items-center justify-center text-slate-400">
//             <FaMapMarkedAlt className="text-3xl" />
//           </div>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white p-4 rounded-xl shadow border border-slate-100">
//         <h3 className="font-semibold text-slate-800 mb-3">Recent Activity</h3>
//         <ul className="space-y-2 text-sm text-slate-700">
//           <li>✅ Order #12345 delivered by John D.</li>
//           <li>📦 New shipment created by Admin</li>
//           <li>🚚 Driver Michael started route 7</li>
//           <li>📍 Location update from Truck #12</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



// src/pages/DashboardPage.jsx
import React from "react";
import {
  FaTruck,
  FaUsers,
  FaBoxOpen,
  FaChartLine,
  FaMapMarkedAlt,
} from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="p-2 sm:p-3 md:p-4">
      {/* Header */}
      <div className="mb-3">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-700">LogiTrack Dashboard</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Real-time insights into your logistics operations.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
        <KpiCard icon={<FaTruck className="text-teal-600 text-lg" />} title="Active Deliveries" value="26" />
        <KpiCard icon={<FaUsers className="text-purple-600 text-lg" />} title="Drivers" value="12" />
        <KpiCard icon={<FaBoxOpen className="text-orange-500 text-lg" />} title="Pending Orders" value="9" />
        <KpiCard icon={<FaChartLine className="text-green-500 text-lg" />} title="Success Rate" value="96%" />
      </div>

      {/* Charts & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">
        <div className="col-span-2 bg-white p-3 rounded-lg shadow-sm border">
          <h3 className="text-sm font-semibold text-slate-800 mb-2">Delivery Trends</h3>
          <div className="h-40 bg-slate-100 rounded flex items-center justify-center text-slate-400 text-sm">
            [Chart Placeholder]
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg shadow-sm border">
          <h3 className="text-sm font-semibold text-slate-800 mb-2">Live Map</h3>
          <div className="h-40 bg-slate-100 rounded flex items-center justify-center text-slate-400">
            <FaMapMarkedAlt className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-3 rounded-lg shadow-sm border">
        <h3 className="text-sm font-semibold text-slate-800 mb-2">Recent Activity</h3>
        <ul className="text-xs text-slate-700 space-y-1">
          <li>✅ Order #12345 delivered by John D.</li>
          <li>📦 New shipment created by Admin</li>
          <li>🚚 Driver Michael started route 7</li>
          <li>📍 Location update from Truck #12</li>
        </ul>
      </div>
    </div>
  );
};

const KpiCard = ({ icon, title, value }) => (
  <div className="bg-white p-3 rounded-lg shadow-sm border flex items-center gap-2">
    {icon}
    <div>
      <p className="text-xs text-slate-500">{title}</p>
      <h2 className="text-base font-semibold text-slate-800">{value}</h2>
    </div>
  </div>
);

export default DashboardPage;
