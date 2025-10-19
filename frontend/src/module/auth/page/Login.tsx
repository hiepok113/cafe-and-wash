import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
} from "@mui/material"
import { loginSchema, LoginForm } from "../schema/loginSchema"
import { useLogin } from "../hook/useLogin"

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) })

  const { login, message, loading } = useLogin()

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2} textAlign="center" color="primary">
          Đăng nhập Coffee & Wash
        </Typography>

        {message && (
          <Alert
            severity={message.startsWith("✅") ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        )}

        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={2}
          onSubmit={handleSubmit(login)}
        >
          <TextField
            label="Email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Mật khẩu"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}
