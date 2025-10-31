import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./module/landing/page/LandingPage"
import MenuPage from "./module/menu/page/MenuPage"
import BookingPage from "./module/booking/page/BookingPage"
import ContactPage from "./module/contact/page/ContactPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
