import { createTheme, PaletteMode } from "@mui/material/styles"

const mode: PaletteMode = "light"

const light = {
  palette: {
    mode,
    primary: { main: "#111111" },
    secondary: { main: "#6B7280" },
    background: { default: "#F8F8F8", paper: "#FFFFFF" },
    text: { primary: "#111111", secondary: "#4B5563" },
    divider: "rgba(0,0,0,0.08)",
  },
}

const theme = createTheme({
  ...light,
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: `'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 800, letterSpacing: -0.4 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: "saturate(180%) blur(8px)",
          backgroundColor: "rgba(255,255,255,0.7)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: "1px solid #E5E7EB",
          boxShadow: "0 10px 20px rgba(0,0,0,0.04)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20 },
        containedPrimary: { backgroundColor: "#111111", color: "#fff" },
      },
    },
  },
})

export default theme
