import TopBar from "../../landing/components/topBar"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <TopBar />
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Typography variant="h3" sx={{ mb: 3, fontWeight: 800 }}>
          Liên hệ
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography fontWeight={700} sx={{ mb: 1 }}>
                Cafe&Wash
              </Typography>
              <Typography color="text.secondary">
                123 Đường ABC, Quận X
              </Typography>
              <Typography color="text.secondary">
                Giờ mở cửa: 8:00 – 21:00
              </Typography>
              <Typography color="text.secondary">
                Hotline: 0909 000 000
              </Typography>
              <Box
                sx={{
                  mt: 3,
                  height: 260,
                  borderRadius: 2,
                  bgcolor: "#E5E7EB",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 3 }}>
              <Typography fontWeight={700} sx={{ mb: 2 }}>
                Gửi tin nhắn cho chúng tôi
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Tên" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField fullWidth multiline minRows={4} label="Nội dung" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                    Gửi
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
