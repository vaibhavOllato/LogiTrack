// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { AuthContext } from './context/AuthContext'

// import ProtectedRoute from './components/ProtectedRoute'

// import DashboardLayout from './layouts/DashboardLayout'
// import LoginPage from './pages/LoginPage'
// import DashboardPage from './pages/DashboardPage'
// import DeliveriesPage from './pages/DeliveriesPage'
// import DriversPage from './pages/DriversPage'
// import AnalyticsPage from './pages/AnalyticsPage'
// import AutoAssignPage from './pages/AutoAssignPage'
// import MyDeliveriesPage from './pages/MyDeliveriesPage'
// import ProfilePage from './pages/ProfilePage'

// function App() {
//   const { user } = useContext(AuthContext)

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} /> */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* Protected routes wrapped in DashboardLayout */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//              <DashboardLayout user={user} />

//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Navigate to="dashboard" replace />} />
//           <Route path="dashboard" element={<DashboardPage />} />

//           {/* Admin only */}
//           <Route
//             path="drivers"
//             element={
//               <ProtectedRoute allowedRoles={['admin']}>
//                 <DriversPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Admin and Dispatcher */}
//           <Route
//             path="deliveries"
//             element={
//               <ProtectedRoute allowedRoles={['admin', 'dispatcher']}>
//                 <DeliveriesPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="auto-assign"
//             element={
//               <ProtectedRoute allowedRoles={['admin', 'dispatcher']}>
//                 <AutoAssignPage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Driver only */}
//           <Route
//             path="my-deliveries"
//             element={
//               <ProtectedRoute allowedRoles={['driver']}>
//                 <MyDeliveriesPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="profile"
//             element={
//               <ProtectedRoute allowedRoles={['driver']}>
//                 <ProfilePage />
//               </ProtectedRoute>
//             }
//           />

//           {/* Analytics accessible to all logged-in users */}
//           <Route path="analytics" element={<AnalyticsPage />} />
//         </Route>

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import DeliveriesPage from "./pages/DeliveriesPage";
import DriversPage from "./pages/DriversPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AutoAssignPage from "./pages/AutoAssignPage";
import MyDeliveriesPage from "./pages/MyDeliveriesPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const user = { name: "John Doe", role: "admin" };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<DashboardLayout user={user} />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="drivers" element={<DriversPage />} />
          <Route path="deliveries" element={<DeliveriesPage />} />
          <Route path="auto-assign" element={<AutoAssignPage />} />
          <Route path="my-deliveries" element={<MyDeliveriesPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
