"use client"

import { Box, Button, Container, Typography } from "@mui/material"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        textAlign: "center",
        backgroundColor: "#fafafa",
        borderTop: "1px solid rgba(0,0,0,0.06)", // ✅ ngăn cách tinh tế
        position: "relative",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          color: "#111",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: 26, md: 32 },
              background: "linear-gradient(90deg,#000,#555)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sẵn sàng cho trải nghiệm “Cà phê & Rửa xe” đẳng cấp?
          </Typography>

          <Typography
            sx={{
              color: "rgba(0,0,0,0.65)",
              mb: 5,
              fontSize: { xs: 16, md: 18 },
              maxWidth: 520,
              mx: "auto",
            }}
          >
            Chỉ mất 30 giây để đặt lịch – đơn giản, tiện lợi và tinh tế.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              href="/booking"
              sx={{
                px: 5,
                py: 1.8,
                fontWeight: 700,
                fontSize: 16,
                borderRadius: 50,
                color: "#fff",
                background: "linear-gradient(90deg,#000,#333,#000)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                "&:hover": {
                  background: "linear-gradient(90deg,#222,#555,#222)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
                },
              }}
            >
              Đặt lịch ngay
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  )
}
