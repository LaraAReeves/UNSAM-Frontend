import { AppBar, IconButton, Toolbar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { MagnifyingGlass, MapTrifold, SignIn, UserCircle } from '@phosphor-icons/react'
import { useAuth } from "@/context/AuthContext"

export default function Nav() {
  const navigate = useNavigate()
  const {isAuthenticated} = useAuth()
  return (
    <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0, height: '10vh', display:'flex', justifyContent:'center', alignItems:'center' }} enableColorOnDark>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
        <IconButton onClick={() => navigate("/buscar")} aria-label='Buscar'>
          <MagnifyingGlass size={32} alt='Lupa' />
        </IconButton>
        <IconButton onClick={() => navigate("/mapa/tornavias-subsuelo")} aria-label='Inicio'>
          <MapTrifold size={32} alt='Mapa' />
        </IconButton>
        <IconButton onClick={() => navigate("/perfil")} aria-label='Perfil'>
          {isAuthenticated && <UserCircle size={32} alt='Usuario' />}
          {!isAuthenticated && <SignIn size={32} alt='Iniciar Sesión' />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}