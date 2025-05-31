// src/pages/DeliveriesPage.jsx
import React from "react";
import { FaSearch, FaTruckMoving, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const DeliveriesPage = () => {
  return (
    <div className="p-2 sm:p-3 md:p-4">
      {/* Header */}
      <div className="mb-3">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-700">Deliveries</h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Manage and track all delivery activities.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div className="flex items-center border rounded px-2 py-1 bg-white shadow-sm">
          <FaSearch className="text-slate-400 mr-1" />
          <input
            type="text"
            placeholder="Search by ID or driver..."
            className="text-xs sm:text-sm focus:outline-none w-full"
          />
        </div>
        <select className="text-xs sm:text-sm border rounded px-2 py-1 bg-white shadow-sm">
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in_transit">In Transit</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Delivery Table */}
      <div className="bg-white p-3 rounded-lg shadow-sm border overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left">
          <thead>
            <tr className="text-slate-600 border-b">
              <th className="py-2">Delivery ID</th>
              <th>Driver</th>
              <th>Status</th>
              <th>ETA</th>
              <th>Destination</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {dummyDeliveries.map((d) => (
              <tr key={d.id} className="border-b last:border-0">
                <td className="py-2">{d.id}</td>
                <td>{d.driver}</td>
                <td>
                  <StatusBadge status={d.status} />
                </td>
                <td>{d.eta}</td>
                <td>{d.destination}</td>
                <td className="text-right">
                  <button className="text-teal-600 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const base = "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium";
  switch (status) {
    case "pending":
      return <span className={`${base} bg-yellow-100 text-yellow-700`}><FaClock />Pending</span>;
    case "in_transit":
      return <span className={`${base} bg-blue-100 text-blue-700`}><FaTruckMoving />In Transit</span>;
    case "delivered":
      return <span className={`${base} bg-green-100 text-green-700`}><FaCheckCircle />Delivered</span>;
    case "cancelled":
      return <span className={`${base} bg-red-100 text-red-700`}><FaTimesCircle />Cancelled</span>;
    default:
      return null;
  }
};

const dummyDeliveries = [
  { id: "#DLV001", driver: "John D.", status: "in_transit", eta: "2h 15m", destination: "New York" },
  { id: "#DLV002", driver: "Sarah K.", status: "delivered", eta: "Delivered", destination: "Los Angeles" },
  { id: "#DLV003", driver: "Michael S.", status: "pending", eta: "4h", destination: "Chicago" },
  { id: "#DLV004", driver: "Amit R.", status: "cancelled", eta: "N/A", destination: "Dallas" },
];

export default DeliveriesPage;
