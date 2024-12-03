import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Box, TextField, Button, Typography, Container, Alert, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { User } from '../../../data/domain/User'

type FormInputs = {
  name: string
  surname: string
  username: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, /* isSubmitSuccessful */ },
    watch,
    setError
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      surname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const createAccount = (userData: FormInputs) => {
    const newUser = new User(
      userData.name,
      userData.surname,
      userData.username,
      userData.email,
      userData.password
    )
    return newUser
  }

  const password = watch('password')

   const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const newAccount = createAccount(data)
      console.log('Datos del usuario:', newAccount)
      /*
       Se debería enviar este usuario a través
       del servicio de autenticación, con algún método como RegistrarUsuario,
       pero es una intuición, nunca trabajé con registro.
      */
      navigate('/login')
    } catch (error) {
      setError('root', {
        type: 'server',
        message: 'Hubo un error al procesar su solicitud. Intente nuevamente.'
      })
    }
  }

  return (
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      <Box
        component='img'
        sx={{
          maxWidth: '80%',
          height: '60%',
          padding: 0,
          margin: 0,
          alignSelf:'center',
          mb: '1rem'
        }}
        alt='Logo de la universidad.'
        src='/logo-unsam-largo.png'
      />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant='h5' component='h1' fontWeight="bold" color="#000000">
            Registro de Usuario
          </Typography>

          {submitError && (
            <Alert severity='error' sx={{ width: '100%', mb: 2 }}>
              {submitError}
            </Alert>
          )}

          {isSubmitted && (
            <Alert severity='success' sx={{ width: '100%', mb: 2 }}>
              ¡Registro exitoso!
            </Alert>
          )}

          <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
            <Controller
              name='name'
              control={control}
              rules={{ required: 'Debe ingresar un nombre' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Nombre'
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

            <Controller
              name='surname'
              control={control}
              rules={{ required: 'Debe ingresar una contraseña' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Apellido'
                  error={!!errors.surname}
                  helperText={errors.surname?.message}
                />
              )}
            />

            <Controller
              name='username'
              control={control}
              rules={{
                required: 'Debe ingresar un nombre de usuario',
                minLength: {
                  value: 4,
                  message: 'El nombre de usuario debe tener al menos 4 caracteres'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Nombre de usuario'
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />

            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Debe ingresar un email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Email'
                  type='email'
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Debe ingresar una contraseña',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener al menos 8 caracteres'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Contraseña'
                  type='password'
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Controller
              name='confirmPassword'
              control={control}
              rules={{
                required: 'Debe confirmar la contraseña',
                validate: value =>
                  value === password || 'Las contraseñas no coinciden'
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  fullWidth
                  label='Confirmar contraseña'
                  type='password'
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              )}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={isSubmitted}
            >
              Registrarse
            </Button>

            <Typography>
              ¿Ya tenés una cuenta? <Link onClick={() => (navigate('/login'))}>Iniciá sesión.</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
  )
}