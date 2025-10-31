"use client"

import { motion } from "framer-motion"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid" // ✅ dùng Grid2 cho size={{ xs, md }}
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import Chip from "@mui/material/Chip"
import { alpha } from "@mui/material/styles"

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        pt: 12,
        pb: 10,
        color: "white",
        background:
          "linear-gradient(135deg,#0b0b0b 0%,#151515 40%,#202020 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Hiệu ứng ánh sáng động nhẹ */}
      <motion.div
        animate={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.07), transparent 70%)",
        }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "mirror" }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          {/* Left section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              }}
            >
              <Chip
                label="Trải nghiệm 2-trong-1"
                sx={{
                  bgcolor: alpha("#ffffff", 0.08),
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  mb: 2,
                  fontWeight: 500,
                  backdropFilter: "blur(6px)",
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  mb: 2,
                  fontWeight: 800,
                  lineHeight: 1.1,
                  background: "linear-gradient(90deg,#fff 0%,#a8a8a8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Cà phê & Rửa xe tiện lợi
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  opacity: 0.85,
                  mb: 4,
                  maxWidth: 460,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Thư giãn cùng ly cà phê trong khi xe bạn được chăm sóc tận tình.
                Đặt lịch chỉ 30 giây.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    size="large"
                    variant="contained"
                    href="/booking"
                    sx={{
                      px: 4,
                      py: 1.4,
                      fontWeight: 700,
                      borderRadius: 3,
                      background:
                        "linear-gradient(90deg,#ffffff,#cfcfcf,#fefefe)",
                      color: "#111",
                      boxShadow:
                        "0px 3px 15px rgba(255,255,255,0.25), 0px 0px 8px rgba(255,255,255,0.05)",
                      transition: "0.3s ease",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg,#e6e6e6,#bfbfbf,#f0f0f0)",
                      },
                    }}
                  >
                    Đặt lịch ngay
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    size="large"
                    variant="outlined"
                    color="inherit"
                    href="/menu"
                    sx={{
                      px: 4,
                      py: 1.3,
                      borderColor: "rgba(255,255,255,0.5)",
                      color: "white",
                      borderRadius: 3,
                      fontWeight: 600,
                      "&:hover": {
                        borderColor: "white",
                        background: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    Xem bảng giá
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Right section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 1 }}
            >
              <Paper
                elevation={8}
                sx={{
                  p: 1,
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Ánh sáng phản chiếu nhẹ */}
                <motion.div
                  animate={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    repeatType: "mirror",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />

                <motion.img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop"
                  alt="coffee and car wash"
                  style={{
                    width: "100%",
                    height: 420,
                    objectFit: "cover",
                    borderRadius: 12,
                    zIndex: 0,
                    position: "relative",
                  }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
