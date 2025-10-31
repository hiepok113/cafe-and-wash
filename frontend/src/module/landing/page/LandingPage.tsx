"use client"

import Box from "@mui/material/Box"
import TopBar from "../components/topBar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Booking from "../components/Booking"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        color: "#111",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      {/* Thanh điều hướng */}
      <TopBar />

      {/* Hero mở đầu với parallax */}
      <Hero />

      {/* Dịch vụ nổi bật */}
      <Services />

      {/* Khu vực đặt lịch preview */}
      <Booking />

      {/* Khách hàng nói gì */}
      <Testimonials />

      {/* Kêu gọi hành động */}
      <CTA />

      {/* Chân trang */}
      <Footer />
    </Box>
  )
}
