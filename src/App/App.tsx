import styles from "./App.module.scss"
import MomentsPage from "../pages/MomentsPage"
import Header from "../components/Header"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import UserPage from "../pages/UserPage"
import AuthPage from "../pages/AuthPage"
import AddMomentPage from "../pages/AddMomentPage"
import NotificationsPage from "../pages/NotificationsPage"
import SearchPage from "../pages/SearchPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from "react-redux"
import axios from "axios"
import { Response } from "../types"
import { setUser } from "../store/UserSlice"
import { useEffect } from "react"
import { useAuth } from "../store/UserSlice"

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useAuth()

  const getUserInfo = async () => {
    try {
      const response: Response = await axios(
        "http://localhost:8000/api/user_info/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )

      dispatch(setUser(response.data))
    } catch (error) {}
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header className={styles.header} />
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/login" element={<AuthPage />}></Route>
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<MomentsPage />}></Route>
              <Route path="/:userLogin" element={<UserPage />} />
              <Route
                path="/notifications"
                element={<NotificationsPage />}
              ></Route>
              <Route path="/create" element={<AddMomentPage />}></Route>
              <Route path="/search" element={<SearchPage />}></Route>
              <Route path="/login" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000} pauseOnHover={true} />
    </div>
  )
}

export default App
