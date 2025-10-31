import api from "../../../service/axios"
import { API_ENDPOINTS } from "../../../constants/endpoint"
import { LoginForm } from "../schema/loginSchema"

export const authApi = {
  login: (data: LoginForm) => api.post(API_ENDPOINTS.AUTH.LOGIN, data),
  register: (data: any) => api.post(API_ENDPOINTS.AUTH.REGISTER, data),
  me: () => api.get(API_ENDPOINTS.AUTH.ME),
}
