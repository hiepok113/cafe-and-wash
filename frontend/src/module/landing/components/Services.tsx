"use client"

import { motion } from "framer-motion"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"

const services = [
  {
    id: 1,
    name: "Rửa xe nhanh",
    desc: "Sạch bóng trong 15 phút, phủ nano cơ bản.",
    price: 50000,
    tag: "Phổ biến",
    image:
      "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vệ sinh nội thất",
    desc: "Hút bụi, khử mùi, vệ sinh taplo & ghế.",
    price: 180000,
    tag: "Ưa chuộng",
    image:
      "https://images.unsplash.com/photo-1621504450181-5f0ab2c024d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cà phê Arabica",
    desc: "Đậm đà, thơm nồng. Pha máy chuẩn barista.",
    price: 35000,
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Combo Wash + Coffee",
    desc: "Rửa xe nhanh + 1 đồ uống tùy chọn.",
    price: 80000,
    tag: "Tiết kiệm",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(180deg,#ffffff 0%,#f6f6f6 100%)",
        color: "#111",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(90deg,#111,#555)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dịch vụ nổi bật
          </Typography>
          <Typography align="center" sx={{ color: "text.secondary", mb: 8 }}>
            Chọn dịch vụ phù hợp – nhanh, sạch và tinh gọn.
          </Typography>
        </motion.div>

        <Grid
          container
          spacing={4}
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {services.map((s) => (
            <Grid key={s.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div whileHover={{ scale: 1.04 }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    backgroundColor: "#fff",
                    border: "1px solid #eee",
                    boxShadow:
                      "0 4px 10px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow:
                        "0 10px 25px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={s.image}
                    alt={s.name}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {s.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      {s.desc}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {s.price.toLocaleString("vi-VN")}₫
                    </Typography>
                  </CardContent>
                  <Box sx={{ px: 2, pb: 2 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                        borderColor: "#333",
                        color: "#333",
                        fontWeight: 600,
                        borderRadius: 3,
                        py: 1,
                        "&:hover": {
                          background: "#111",
                          color: "#fff",
                          borderColor: "#111",
                        },
                      }}
                    >
                      Xem chi tiết
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
