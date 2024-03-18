import "./App.scss"
import MomentsPage from "../pages/MomentsPage"
import Header from "../components/Header"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MomentsPage />}></Route>
          <Route path="/user/:user" element={<MomentsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
