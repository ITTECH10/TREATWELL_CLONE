import { Suspense, lazy } from 'react'
import { hasPermission, actions } from './utils/DataProviders/ROLES/permissions'
import Loader from './components/Loader'

import { Navigate, useRoutes } from 'react-router-dom';
import { useApp } from './context/AppContext'

// layouts
import DashboardLayout from './layouts/dashboard';
// ---------------------------------------------------------------------

// const Login = lazy(() => import('./pages/Login'))
import Login from './pages/Login'
import Home from './pages/Home'
// const Home = lazy(() => import('./pages/Home'))
const LoginTherapeuts = lazy(() => import('./pages/LoginTherapeuts'))
const Register = lazy(() => import('./pages/Register'))
const FilteredTherapeuts = lazy(() => import('./pages/FilteredTherapeuts'))
const TherapeutsNear = lazy(() => import('./pages/TherapeutsNear'))
const TherapeutDetails = lazy(() => import('./pages/TherapeutDetails'))
const MyAppointedTherapies = lazy(() => import('./pages/MyAppointedTherapies'))
const TherapyCategories = lazy(() => import('./pages/TherapyCategories'))
const BecomePartner = lazy(() => import('./pages/BecomePartner'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const NotFound = lazy(() => import('./pages/Page404'))

export default function Router() {
  const { authenticated, logedInPacient } = useApp()
  const mainRoleMatch = hasPermission(logedInPacient, actions.MAIN_ROLE_UI_VISIBILITY)

  const MAIN_ROLE_ROUTING = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <Home /> },
    { path: '/therapeuts', element: <FilteredTherapeuts /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/:id', element: <TherapeutDetails /> },
    { path: '/profile/appointments', element: <MyAppointedTherapies /> },
    { path: '/therapies/categories', element: <TherapyCategories /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/become-partner', element: <BecomePartner /> },
    { path: '*', element: <NotFound /> }
  ]

  const SUB_ROLE_ROUTING = [
    { path: '/', element: <Navigate to="/home" /> },
    { path: '/home', element: <TherapeutDetails /> },
    { path: '/therapeuts', element: <FilteredTherapeuts /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/near', element: <TherapeutsNear /> },
    { path: '/therapeuts/:id', element: <TherapeutDetails /> },
    { path: '/profile/appointments', element: <MyAppointedTherapies /> },
    { path: '/therapies/categories', element: <TherapyCategories /> },
    { path: '/privacy-policy', element: <PrivacyPolicy /> },
    { path: '/become-partner', element: <BecomePartner /> },
    // { path: '/profile/therapies', element: <TherapeutMyTherapies /> },
    { path: '*', element: <NotFound /> }
  ]

  let authenticatedConfig = {
    path: '/',
    element:
      <Suspense fallback={<Loader />}>
        <DashboardLayout />
      </Suspense>,
    children: mainRoleMatch ? MAIN_ROLE_ROUTING : SUB_ROLE_ROUTING
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
      { path: '/authenticate/therapeuts', element: <LoginTherapeuts /> },
      { path: '/register', element: <Register /> },
      { path: '/forgotPassword', element: <ForgotPassword /> },
      { path: '/resetPassword/:token', element: <ResetPassword /> },
      { path: '/home', element: <Home /> },
      { path: '/therapeuts', element: <FilteredTherapeuts /> },
      { path: '/therapeuts/near', element: <TherapeutsNear /> },
      { path: '/therapeuts/:id', element: <TherapeutDetails /> },
      { path: '/therapies/categories', element: <TherapyCategories /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/become-partner', element: <BecomePartner /> },
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