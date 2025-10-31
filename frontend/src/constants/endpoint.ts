// src/constants/endpoint.ts
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    ME: "/auth/me",
    LOGOUT: "/auth/logout",
  },
  SERVICE: {
    LIST: "/services",
    DETAIL: (id: string | number) => `/services/${id}`,
  },
  BOOKING: {
    CREATE: "/bookings",
    LIST: "/bookings",
  },
}
