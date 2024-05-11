import styles from "./App.module.scss"
import MomentsPage from "../../pages/MomentsPage"
import Header from "../../components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserPage from "../../pages/UserPage"
import AuthPage from "../../pages/AuthPage"
import AddMomentPage from "../../pages/AddMomentPage"
import NotificationsPage from "../../pages/NotificationsPage"
import SearchPage from "../../pages/SearchPage"
import { PrivateRoute } from "../../components/PrivateRoute/PrivateRoute"

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthPage />}></Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MomentsPage />}></Route>
        <Route path="/notifications" element={<NotificationsPage />}></Route>
        <Route path="/:userLogin" element={<UserPage />} />
        <Route path="/create" element={<AddMomentPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
      </Route>
    </Routes>
  )
}

export default useRoutes
