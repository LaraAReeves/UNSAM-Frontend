import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { TransparentContainer } from '../../ui/TransparentContainer'
import { useNavigate } from 'react-router-dom'

export function Welcome() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundImage:`url('/fondo-tornavias.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        gap: '5rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src="/logo-unsam-blanco.png"
          alt="University Logo"
          style={{
            maxWidth: '300px',
            width: '100%',
            height: 'auto'
          }}
        />
      </Container>

      <TransparentContainer padding='1.5rem'>
        <Stack spacing={2} direction='column' width='100%'>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/login')}
          >
            Iniciá sesión
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => navigate('/register')}
          >
            Registrate
          </Button>
        </Stack>
      </TransparentContainer>
      <TransparentContainer padding='0.9rem'>
        <Typography color="#000000">
        ¡Informate sobre tus materias, aulas y profesores!
        </Typography>
      </TransparentContainer>
    </Box>
  )
}