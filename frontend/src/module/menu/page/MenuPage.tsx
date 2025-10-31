import { useState } from "react"
import Container from "@mui/material/Container"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import TopBar from "../../landing/components/topBar"
import { cafeMenu, washMenu, comboMenu } from "../mock/menuData"

const groups = [
  { key: "cafe", label: "Cà phê", data: cafeMenu },
  { key: "wash", label: "Rửa xe", data: washMenu },
  { key: "combo", label: "Combo", data: comboMenu },
]

export default function MenuPage() {
  const [tab, setTab] = useState(0)
  const items = groups[tab].data

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <TopBar />
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Typography variant="h3" sx={{ mb: 1, fontWeight: 800 }}>
          Menu
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Chọn loại dịch vụ để xem chi tiết
        </Typography>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          sx={{
            mb: 4,
            "& button": { fontWeight: 600 },
            "& .Mui-selected": { color: "text.primary" },
          }}
        >
          {groups.map((g) => (
            <Tab key={g.key} label={g.label} />
          ))}
        </Tabs>

        <Grid container spacing={3}>
          {items.map((i) => (
            <Grid key={i.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 4 },
                }}
              >
                <CardMedia image={i.image} sx={{ height: 160 }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{i.name}</Typography>
                  <Typography color="text.secondary" variant="body2">
                    {i.desc}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {i.price.toLocaleString("vi-VN")}đ
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2 }}>
                  <Button variant="contained" fullWidth>
                    Đặt ngay
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
