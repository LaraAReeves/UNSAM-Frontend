import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
// import { useNavigate } from "react-router-dom"
import { MagnifyingGlass, MapTrifold, UserCircle } from '@phosphor-icons/react'

export default function Nav() {
  // const navigate = useNavigate()

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0}} enableColorOnDark>
      <Toolbar>
        <IconButton color="secondary" /* onClick={() => navigate("/search")} */>
        <MagnifyingGlass size={32}/>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}/>
        <IconButton color="secondary" /* onClick={() => navigate("/")} */ >
        <MapTrifold size={32}/>
        </IconButton>
        <Box sx={{ flexGrow: 1 }}/>
        <IconButton color="secondary" /* onClick={() => navigate("/profile")} */ >
        <UserCircle size={32}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}