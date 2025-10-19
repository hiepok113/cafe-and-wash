import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#00897B" },
    secondary: { main: "#FFB300" },
    background: { default: "#FAFAFA" },
  },
  typography: { button: { textTransform: "none" } },
  shape: { borderRadius: 8 },
})

export default theme
