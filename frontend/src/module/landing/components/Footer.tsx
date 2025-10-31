"use client"

import { Box, Container, Typography, Stack, IconButton } from "@mui/material"
import { motion } from "framer-motion"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111",
        color: "#f5f5f5",
        py: { xs: 8, md: 10 },
        textAlign: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ mb: 3, letterSpacing: 1 }}
          >
            Cafe&Wash
          </Typography>

          <Typography
            sx={{
              maxWidth: 500,
              mx: "auto",
              mb: 4,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Trải nghiệm thư giãn trong khi xe bạn được chăm sóc tận tình.
          </Typography>

          {/* Social icons */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 6 }}
          >
            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, i) => (
              <motion.div key={i} whileHover={{ scale: 1.15 }}>
                <IconButton
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.1)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <Icon fontSize="medium" />
                </IconButton>
              </motion.div>
            ))}
          </Stack>

          <Typography variant="body2" color="rgba(255,255,255,0.5)">
            © 2025 Cafe&Wash. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  )
}
