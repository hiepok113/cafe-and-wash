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
  Link,
} from "@mui/material"
import { registerSchema, RegisterForm } from "../schema/register.schema"
import { useRegister } from "../hook/useRegister"

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })

  const { register: submitRegister, message, loading } = useRegister()

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={2} textAlign="center" color="primary">
          Đăng ký tài khoản Coffee & Wash
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
          onSubmit={handleSubmit(submitRegister)}
        >
          <TextField
            label="Họ và tên"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </Button>

          <Typography textAlign="center" mt={2}>
            Đã có tài khoản?{" "}
            <Link href="/login" underline="hover">
              Đăng nhập
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}
