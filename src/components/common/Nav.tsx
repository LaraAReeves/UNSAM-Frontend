import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { MagnifyingGlass, MapTrifold, UserCircle } from '@phosphor-icons/react'

export default function Nav() {
  const navigate = useNavigate()

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} enableColorOnDark>
      <Toolbar>
        <IconButton onClick={() => navigate("/profile")} color="secondary" aria-label='Perfil'>
          <UserCircle size={32} alt='Usuario' />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={() => navigate("/")} color="secondary" aria-label='Inicio'>
          <MapTrifold size={32} alt='Mapa' />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={() => navigate("/search")} color="secondary" aria-label='Buscar'>
          <MagnifyingGlass size={32} alt='Lupa' />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}