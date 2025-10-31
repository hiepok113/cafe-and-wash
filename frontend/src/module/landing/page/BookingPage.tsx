import TopBar from "../components/topBar"
import Booking from "../../landing/components/Booking"
import Box from "@mui/material/Box"

export default function BookingPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <TopBar />
      <Booking />
    </Box>
  )
}
