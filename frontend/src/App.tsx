import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./module/auth/page/Login"
import RegisterPage from "./module/auth/page/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
