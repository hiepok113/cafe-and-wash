"use client"

import { motion } from "framer-motion"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"

const testimonials = [
  {
    id: 1,
    name: "Anh Quân",
    role: "Khách quen",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=12",
    comment:
      "Xe sạch bóng, cà phê ngon. Ngồi chill 15 phút là xe xong — quá tiện!",
  },
  {
    id: 2,
    name: "Chị Linh",
    role: "Nhân viên văn phòng",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
    comment: "Đặt lịch online nhanh, đến là làm ngay, không chờ đợi.",
  },
  {
    id: 3,
    name: "Bạn Hải",
    role: "Tài xế công nghệ",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=33",
    comment: "Giá hợp lý, wifi mạnh, không gian thoáng đãng.",
  },
]

export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        background: "linear-gradient(180deg,#f8f8f8 0%,#ffffff 100%)",
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
              color: "#111",
            }}
          >
            Khách hàng nói gì
          </Typography>
          <Typography
            align="center"
            sx={{ color: "text.secondary", mb: 8, fontSize: 16 }}
          >
            Sự hài lòng của bạn là động lực của chúng tôi.
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
          {testimonials.map((t, i) => (
            <Grid key={t.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    height: "100%",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    border: "1px solid #e5e5e5",
                    boxShadow:
                      "0 6px 20px rgba(0,0,0,0.05), 0 0 10px rgba(0,0,0,0.03)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 12px 25px rgba(0,0,0,0.1), 0 0 15px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Avatar
                      src={t.avatar}
                      alt={t.name}
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                        border: "3px solid #eee",
                        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                      }}
                    />
                  </motion.div>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333",
                      mb: 3,
                      fontStyle: "italic",
                      minHeight: 80,
                    }}
                  >
                    “{t.comment}”
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {t.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t.role}
                  </Typography>

                  <Box sx={{ mt: 1 }}>
                    {"⭐".repeat(t.rating)}
                    {"☆".repeat(5 - t.rating)}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
