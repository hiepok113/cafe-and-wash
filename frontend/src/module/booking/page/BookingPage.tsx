import Container from "@mui/material/Container"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import TopBar from "../../landing/components/topBar"

export default function BookingPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <TopBar />
      <Container maxWidth="md" sx={{ pt: 12, pb: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
            Đặt lịch dịch vụ
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Điền thông tin để đặt lịch rửa xe hoặc thưởng thức cà phê.
          </Typography>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Họ tên" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField fullWidth label="Số điện thoại" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField fullWidth label="Email" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Loại dịch vụ"
                placeholder="VD: Rửa xe + Cà phê"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Ngày"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Giờ"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Gửi yêu cầu
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}
