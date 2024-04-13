import styles from "./App.module.scss"
import MomentsPage from "../pages/MomentsPage"
import Header from "../components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserPage from "../pages/UserPage"
import AuthPage from "../pages/AuthPage"
import AddMomentPage from "../pages/AddMomentPage"
import NotificationsPage from "../pages/NotificationsPage"
import SearchPage from "../pages/SearchPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header className={styles.header} />
        <Routes>
          <Route path="/" element={<MomentsPage />}></Route>
          <Route path="/:userLogin" element={<UserPage />} />

          <Route path="/notifications" element={<NotificationsPage />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route path="/create" element={<AddMomentPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={1000} pauseOnHover={true} />
    </div>
  )
}

export default App
