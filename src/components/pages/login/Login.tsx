import { useForm, Controller } from 'react-hook-form'
import { TextField, Button, Box, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data: any) => {
        console.log('Login Data:', data)
        // Redirigir a la ruta "/"
        navigate('/')
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: 400,
                margin: '0 auto',
                mt: 5,
                p: 3,
                border: '1px solid #ccc',
                borderRadius: 2,
            }}
        >
            <img
                src="/src/assets/logos/logo-unsam-largo.png"
                alt="Logo UNSAM"
                style={{width: '100%', marginBottom: '20px'}}
            />
            <h1>Tornaguía</h1>

            {/* Email Field */}
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: 'El Email es requerido',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Ingrese una dirección de email válida',
                    },
                }}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        fullWidth
                    />
                )}
            />

            {/* Password Field */}
            <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                    required: 'La contraseña es requerida',
                    minLength: {
                        value: 6,
                        message: 'La contraseña debe tener al menos 6 caracteres',
                    },
                }}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Password"
                        type="password"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        fullWidth
                    />
                )}
            />

            {/* Submit Button */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Login
            </Button>
        </Box>
    )
}
