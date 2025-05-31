// src/components/DriverCard.jsx
const DriverCard = ({ driver }) => {
  return (
    <div className="bg-white p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{driver.name}</h3>
      <p>Phone: {driver.phone}</p>
      <p>Status: {driver.available ? "Available" : "Busy"}</p>
      <p>Deliveries Today: {driver.deliveryCount}</p>
    </div>
  )
}

export default DriverCard
