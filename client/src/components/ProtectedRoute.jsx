// // src/components/ProtectedRoute.jsx
// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthContext'
// import { Navigate } from 'react-router-dom'

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useContext(AuthContext)

//   if (!user) {
//     // Not logged in
//     return <Navigate to="/login" />
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     // Role not allowed
//     return <Navigate to="/login" />
//   }

//   return children
// }

// export default ProtectedRoute
