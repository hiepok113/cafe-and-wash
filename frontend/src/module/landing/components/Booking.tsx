"use client"

import { useState } from "react"
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Box,
  Divider,
} from "@mui/material"
import { motion } from "framer-motion"

export default function Booking() {
  const [open, setOpen] = useState(false)
  const [payload, setPayload] = useState<any>({ name: "", plate: "", time: "" })
  const [code, setCode] = useState<string | null>(null)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOpen(true)
    setCode(null)
    setTimeout(() => setCode("BK-" + Math.floor(Math.random() * 99999)), 600)
  }

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 9 }, // ✅ giảm padding tổng
        pb: { xs: 4, md: 5 }, // ✅ giảm khoảng cách dưới hơn nữa
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section title */}
          <Typography
            variant="h5"
            fontWeight={800}
            align="center"
            sx={{
              mb: 4,
              fontSize: { xs: 22, md: 26 },
              color: "#111",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Đặt lịch ngay hôm nay
          </Typography>

          <Paper
            elevation={5}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 6,
              mx: "auto",
              maxWidth: 760,
              backgroundColor: "#fff",
              boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              align="center"
              sx={{
                mb: 1.5,
                fontSize: { xs: 22, md: 28 },
              }}
            >
              Đặt lịch rửa xe & cà phê
            </Typography>

            <Typography
              align="center"
              sx={{
                mb: 4,
                color: "rgba(0,0,0,0.6)",
                fontSize: { xs: 14, md: 16 },
              }}
            >
              Chỉ mất 30 giây. Chúng tôi sẽ chuẩn bị trước để bạn không phải
              chờ.
            </Typography>

            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Tên của bạn"
                    required
                    value={payload.name}
                    onChange={(e) =>
                      setPayload({ ...payload, name: e.target.value })
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 54,
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Biển số xe"
                    required
                    value={payload.plate}
                    onChange={(e) =>
                      setPayload({ ...payload, plate: e.target.value })
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 54,
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    type="datetime-local"
                    label="Thời gian"
                    InputLabelProps={{ shrink: true }}
                    required
                    value={payload.time}
                    onChange={(e) =>
                      setPayload({ ...payload, time: e.target.value })
                    }
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: 54,
                        borderRadius: 3,
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Button
                      variant="contained"
                      size="large"
                      type="submit"
                      fullWidth
                      sx={{
                        mt: 3,
                        py: 1.6,
                        fontWeight: 700,
                        borderRadius: 50,
                        fontSize: 16,
                        color: "#fff",
                        background: "linear-gradient(90deg,#000,#333,#000)",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                        "&:hover": {
                          background: "linear-gradient(90deg,#222,#555,#222)",
                        },
                      }}
                    >
                      Xác nhận đặt lịch
                    </Button>
                  </motion.div>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>

        {/* ✅ Line chia section tinh tế hơn, gần hơn */}
        <Divider
          sx={{
            mt: { xs: 5, md: 6 }, // ✅ gần hơn nhiều
            mx: "auto",
            width: "15%",
            height: 2,
            borderRadius: 5,
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)",
          }}
        />
      </Container>

      {/* Dialog kết quả */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Kết quả đặt lịch</DialogTitle>
        <DialogContent>
          {code ? (
            <Alert severity="success" sx={{ mt: 1 }}>
              🎉 Đặt lịch thành công! Mã của bạn: <b>{code}</b>
            </Alert>
          ) : (
            <Alert severity="info" sx={{ mt: 1 }}>
              Đang xử lý...
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
