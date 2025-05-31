// src/components/Notification.jsx
import { useEffect } from 'react'

const Notification = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  const bgColors = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-400'
  }

  return (
    <div className={`fixed top-5 right-5 p-4 rounded shadow text-white ${bgColors[type]}`}>
      <p>{message}</p>
    </div>
  )
}

export default Notification
