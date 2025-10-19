/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // Thêm biến env khác tại đây nếu cần (ví dụ VITE_APP_NAME)
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
