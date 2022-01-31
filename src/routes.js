import { Suspense, lazy } from 'react'
import Loader from './components/Loader'

import { Navigate, useRoutes } from 'react-router-dom';
import { useApp } from './context/AppContext'

// layouts
import DashboardLayout from './layouts/dashboard';
// ---------------------------------------------------------------------

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Home = lazy(() => import('./pages/Home'))
const FilteredTherapeuts = lazy(() => import('./pages/FilteredTherapeuts'))
const TherapeutsNear = lazy(() => import('./pages/TherapeutsNear'))
const TherapeutDetails = lazy(() => import('./pages/TherapeutDetails'))
const MyAppointedTherapies = lazy(() => import('./pages/MyAppointedTherapies'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const NotFound = lazy(() => import('./pages/Page404'))

export default function Router() {
  const { authenticated } = useApp()
  const match = true

  const MAIN_ROLE_ROUTING = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <Home /> },
    { path: '/therapeuts', element: <FilteredTherapeuts /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/:id', element: <TherapeutDetails /> },
    { path: '/profile/therapies', element: <MyAppointedTherapies /> },
    { path: '*', element: <NotFound /> }
  ]

  const SUB_ROLE_ROUTING = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <Home /> },
    { path: '/therapeuts', element: <FilteredTherapeuts /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/:id', element: <TherapeutDetails /> },
    { path: '/profile/therapies', element: <MyAppointedTherapies /> },
    { path: '*', element: <NotFound /> }
  ]

  let authenticatedConfig = {
    path: '/',
    element:
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>,
    children: match ? MAIN_ROLE_ROUTING : SUB_ROLE_ROUTING
  }

  let nonAuthConfig = {
    path: '/',
    element:
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>,
    children: [
      { path: '/', element: <Navigate to="/home" /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgotPassword', element: <ForgotPassword /> },
      { path: '/resetPassword/:token', element: <ResetPassword /> },
      { path: '/home', element: <Home /> },
      { path: '/therapeuts', element: <FilteredTherapeuts /> },
      { path: '/therapeuts/near', element: <TherapeutsNear /> },
      { path: '/therapeuts/:id', element: <TherapeutDetails /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> }
    ]
  }

  const configToUse = authenticated ? authenticatedConfig : nonAuthConfig

  return useRoutes([
    configToUse,
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}