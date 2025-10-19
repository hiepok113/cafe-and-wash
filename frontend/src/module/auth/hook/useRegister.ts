import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { authApi } from "../api/auth.api"
import { RegisterForm } from "../schema/register.schema"

export function useRegister() {
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const register = async (data: RegisterForm) => {
    try {
      setLoading(true)
      setMessage(null)

      const res = await authApi.register(data)

      if (res.data.success) {
        setMessage("✅ Đăng ký thành công! Đang chuyển đến đăng nhập...")
        setTimeout(() => navigate("/login"), 1500)
      } else {
        setMessage("❌ Đăng ký thất bại, vui lòng thử lại")
      }
    } catch (err) {
      console.error(err)
      setMessage("⚠️ Lỗi server hoặc kết nối thất bại")
    } finally {
      setLoading(false)
    }
  }

  return { register, message, setMessage, loading }
}
