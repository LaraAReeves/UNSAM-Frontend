import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
// import { useNavigate } from "react-router-dom"

export default function Nav() {
  // const navigate = useNavigate()

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0}} enableColorOnDark>
      <Toolbar>
        <IconButton /* onClick={() => navigate("/search")} */>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}/>
        <IconButton /* onClick={() => navigate("/")} */ >
        </IconButton>
        <Box sx={{ flexGrow: 1 }}/>
        <IconButton /* onClick={() => navigate("/profile")} */ >
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}