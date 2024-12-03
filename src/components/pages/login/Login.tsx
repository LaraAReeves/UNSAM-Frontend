import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { TextField, Button, Box, } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../../../context/AuthContext.tsx";
import { LoginRequest } from '../../../data/domain/User.ts';

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginRequest>()
    const { login } = useAuth()
    const navigate = useNavigate()

    const onSubmit : SubmitHandler<LoginRequest> = (data) => {
        console.log('Login Data:', data)
        // Redirigir a la ruta "/"
        login()
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
            <h1>Login</h1>

            {/* Email Field */}
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: 'Debe ingresar un email',
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
                        helperText={errors.email?.message ? String(errors.email?.message) : ''}
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
                    required: 'Debe ingresar una contraseña',
                    minLength: {
                        value: 6,
                        message: 'La contraseña debe tener al menos 8 caracteres',
                    },
                }}
                render={({field}) => (
                    <TextField
                        {...field}
                        label="Password"
                        type="password"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password?.message? String(errors.password?.message) : ''}
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
