import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

export default function TopBar() {
  return (
    <AppBar position="fixed" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 800, color: "text.primary" }}
          >
            Cafe&Wash
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            <Button color="inherit" href="/">
              Trang chủ
            </Button>
            <Button color="inherit" href="/menu">
              Menu
            </Button>
            <Button color="inherit" href="/booking">
              Đặt lịch
            </Button>
            <Button color="inherit" href="/contact">
              Liên hệ
            </Button>
          </Box>
          <Button variant="contained" color="primary" href="/booking">
            Đặt lịch ngay
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
