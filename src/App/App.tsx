import "./App.scss"
import MomentsPage from "../pages/MomentsPage"
import Header from "../components/Header"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import UserPage from "../pages/UserPage"
import AuthPage from "../pages/AuthPage"
import AddMomentPage from "../pages/AddMomentPage"
import NotificationsPage from "../pages/NotificationsPage"
import SearchPage from "../pages/SearchPage"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MomentsPage />}></Route>
          <Route path="/:userLogin" element={<UserPage />} />

          <Route path="/notifications" element={<NotificationsPage />}></Route>
          <Route path="/login" element={<AuthPage />}></Route>
          <Route path="/create" element={<AddMomentPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
