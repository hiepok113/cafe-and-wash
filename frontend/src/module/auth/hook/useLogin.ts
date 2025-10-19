import { useState } from "react"
import { authApi } from "../api/auth.api"
import { LoginForm } from "../schema/loginSchema"

export function useLogin() {
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const login = async (data: LoginForm) => {
    try {
      setLoading(true)
      setMessage(null)

      const res = await authApi.login(data)

      if (res.data.success) {
        const userEmail = res.data.data?.user?.email
        setMessage(`✅ Đăng nhập thành công với email: ${userEmail}`)
        localStorage.setItem("token", res.data.data.token)
      } else {
        setMessage("❌ Sai email hoặc mật khẩu")
      }
    } catch (err) {
      console.error(err)
      setMessage("⚠️ Lỗi server hoặc kết nối thất bại")
    } finally {
      setLoading(false)
    }
  }

  return { login, message, setMessage, loading }
}
