// src/components/DeliveryCard.jsx
const DeliveryCard = ({ delivery }) => {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h3 className="text-lg font-bold">{delivery.title}</h3>
      <p>Pickup: {delivery.pickup}</p>
      <p>Drop: {delivery.drop}</p>
      <p>Status: <span className="font-semibold">{delivery.status}</span></p>
      <p>ETA: {delivery.eta}</p>
    </div>
  )
}

export default DeliveryCard
