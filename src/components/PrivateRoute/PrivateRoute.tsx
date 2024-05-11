import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../../store/UserSlice"
import { useEffect } from "react"
// import useAuth from "../hooks/useAuth";

export const PrivateRoute = () => {
  const isAuthenticated = useAuth()

  const location = useLocation()

  return isAuthenticated === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
